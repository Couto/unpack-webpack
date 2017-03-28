import React from 'react';
import { Link } from 'react-router/es';

export default ({ children }) => (
  <section>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/artists">Artists</Link></li>
      </ul>
    </nav>
    {children}
  </section>
)
