import React from 'react';
// Here we are importing a CSS file as a dependency
import './style.css';

function Header() {
  return (

    <header className="header text-center">
      <h1 className="display-3">Bark Avenue</h1>
      <h2>Luxury Dog Hotel </h2>
    </header>
  );
}

export default Header;
