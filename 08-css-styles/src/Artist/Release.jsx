import React from 'react';

export default ({name, cover, year}) => (
  <figure className="Release">
    <img className="Release__cover" src={cover} alt={name} width="250px"/>
    <figcaption className="Release__caption">
      <dl>
        <dt>Release:</dt><dd>{name}</dd>
        <dt>Year:</dt><dd>{year}</dd>
      </dl>
    </figcaption>
  </figure>
)
