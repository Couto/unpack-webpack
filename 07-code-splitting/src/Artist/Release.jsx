import React from 'react';

export default ({name, cover, year}) => (
  <figure>
    <img src={cover} alt={name} width="250px"/>
    <figcaption>
      <dl>
        <dt>Release:</dt><dd>{name}</dd>
        <dt>Year:</dt><dd>{year}</dd>
      </dl>
    </figcaption>
  </figure>
)
