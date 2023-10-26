import React from 'react';
import home from './img/homee.png';
import search from './img/searchh.png';
import map from './img/map.png'

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <img src={home} alt="home-icon" />
          <h1>HOME</h1>
          <img src={search} alt="home-icon" />
        </div>
      </nav>
      <div className="map-img-container">
        <img className="map-img" src={map} alt="World Map" />
      </div>
    </header>
  );
}

export default Header;
