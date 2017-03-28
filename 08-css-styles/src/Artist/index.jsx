import React from 'react';
import Release from './Release';
import Artist from '../shared/Artist';

import './style.css';

export default ({ artist }) => () => (
  <div>
    <Artist {...artist} />
    <ul>
      {artist.releases.map(release => <li key={release.name}>
        <Release {...release}/>
      </li>)}
    </ul>
  </div>
);
