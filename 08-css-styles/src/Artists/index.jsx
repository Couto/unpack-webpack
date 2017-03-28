import React from 'react';
import {Link} from 'react-router/es';
import Artist from '../shared/Artist';

export default ({ artists }) => () => (
  <ul>
    {artists.map(artist => (
      <li key={artist.name}>
        <Link to={`/artist/${artist.name}`} >
          <Artist {...artist}/>
        </Link>
      </li>)
    )}
  </ul>
);
