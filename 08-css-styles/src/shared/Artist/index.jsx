import React from 'react';
import styles from './style.css'

export default ({ name, photo }) => (
  <figure className={styles.artist}>
    <img src={photo.src} alt={name} className={styles.photo}/>
    <figcaption className="caption">
      <dl>
        <dt>Artist:</dt><dd>{name}</dd>
        <dt>Attribution:</dt><dd>{photo.attribution}</dd>
      </dl>
    </figcaption>
  </figure>
)
