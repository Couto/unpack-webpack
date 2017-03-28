import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router/es';

import Root from './Root';

const routes = {
  component: Root,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        return import('./Home')
          .then((module) => cb(null, module.default))
          .catch(cb)
      }
    },
    {
      path: 'about',
      getComponent(location, cb) {
        return import('./About')
          .then((module) => cb(null, module.default))
          .catch(cb)
      }
    },
    {
      path: 'artists',
      getComponent(location, cb) {
        return Promise.all([
          import('./Artists'),
          import('./data/artists.json')
        ])
        .then(([module, data]) => cb(null, module.default({ artists: data })))
        .catch(error => console.error(error))
      }
    },
    {
      path: 'artist/:name',
      getComponent(location, cb) {
        return Promise.all([
          import('./Artist'),
          import('./data/artists.json')
        ])
        .then(([module, data]) => [
          module,
          data.filter(a => a.name.toLowerCase() === location.params.name.toLowerCase()).pop()
        ])
        .then(([module, data]) => cb(null, module.default({ artist: data })))
        .catch(error => console.error(error))
      }
    }
  ]
}




export default () => (<Router history={browserHistory} routes={routes} />);
