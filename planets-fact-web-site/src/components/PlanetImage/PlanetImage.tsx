import React from 'react';
import type { TabType, Planet } from '../../types/Planet';
import './PlanetImage.css';

interface PlanetImageProps {
  planet: Planet;
  activeTab: TabType;
}

const PlanetImage: React.FC<PlanetImageProps> = ({ planet, activeTab }) => {
  const getImageSrc = () => {
    switch (activeTab) {
      case 'overview':
        return planet.images.planet;
      case 'structure':
        return planet.images.internal;
      case 'geology':
        return planet.images.planet;
      default:
        return planet.images.planet;
    }
  };

  const getSizeClass = () => {
    const planetName = planet.name.toLowerCase();
    return `planet-image--${planetName}`;
  };

  return (
    <div className={`planet-image ${getSizeClass()}`}>
      <img 
        src={getImageSrc()} 
        alt={`${planet.name} - ${activeTab}`}
        className="planet-image__main"
      />
      {activeTab === 'geology' && (
        <img 
          src={planet.images.geology}
          alt={`${planet.name} geology`}
          className="planet-image__geology"
        />
      )}
    </div>
  );
};

export default PlanetImage; 