import React from 'react';
import type { TabData } from '../../types/Planet';
import './PlanetContent.css';

interface PlanetContentProps {
  tabData: TabData;
  planetName: string;
}

const PlanetContent: React.FC<PlanetContentProps> = ({ tabData, planetName }) => {
  return (
    <div className="planet-content">
      <h1 className="planet-content__title">{planetName}</h1>
      <p className="planet-content__text">{tabData.content.content}</p>
      <div className="planet-content__source">
        <span className="planet-content__source-label">Source:</span>
        <a 
          href={tabData.content.source} 
          target="_blank" 
          rel="noopener noreferrer"
          className="planet-content__source-link"
        >
          Wikipedia
          <img src="/assets/icon-source.svg" alt="External link" />
        </a>
      </div>
    </div>
  );
};

export default PlanetContent; 