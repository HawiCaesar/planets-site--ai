import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPlanetNames, getPlanetColors } from '../../services/planetService';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const planetNames = getPlanetNames();
  const planetColors = getPlanetColors();

  const getCurrentPlanet = () => {
    const pathParts = location.pathname.split('/');
    return pathParts[pathParts.length - 1] || 'mercury';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/mercury" className="header__logo">
          <h3>The Planets</h3>
        </Link>
        
        <button 
          className="header__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <img src="/assets/icon-hamburger.svg" alt="Menu" />
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {planetNames.map((planet) => (
              <li key={planet} className="header__nav-item">
                <Link
                  to={`/${planet.toLowerCase()}`}
                  className={`header__nav-link ${
                    getCurrentPlanet().toLowerCase() === planet.toLowerCase() 
                      ? 'header__nav-link--active' 
                      : ''
                  }`}
                  style={{ 
                    '--planet-color': planetColors[planet] 
                  } as React.CSSProperties}
                  onClick={closeMenu}
                >
                  <span 
                    className="header__nav-dot" 
                    style={{ backgroundColor: planetColors[planet] }}
                  ></span>
                  {planet}
                  <img src="/assets/icon-chevron.svg" alt="" className="header__nav-chevron" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 