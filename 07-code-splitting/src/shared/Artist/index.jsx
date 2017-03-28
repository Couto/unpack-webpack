import React from 'react';

export default ({ name, photo }) => (
  <figure>
    <img src={photo.src} alt={name} width="250"/>
    <figcaption>
      <dl>
        <dt>Artist:</dt><dd>{name}</dd>
        <dt>Attribution:</dt><dd>{photo.attribution}</dd>
      </dl>
    </figcaption>
  </figure>
)
