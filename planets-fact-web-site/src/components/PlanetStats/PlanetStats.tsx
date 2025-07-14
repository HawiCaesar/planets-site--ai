import React from 'react';
import type { Planet } from '../../types/Planet';
import './PlanetStats.css';

interface PlanetStatsProps {
  planet: Planet;
}

const PlanetStats: React.FC<PlanetStatsProps> = ({ planet }) => {
  const stats = [
    { label: 'Rotation Time', value: planet.rotation },
    { label: 'Revolution Time', value: planet.revolution },
    { label: 'Radius', value: planet.radius },
    { label: 'Average Temp.', value: planet.temperature }
  ];

  return (
    <div className="planet-stats">
      {stats.map((stat, index) => (
        <div key={index} className="planet-stats__item">
          <h4 className="planet-stats__label">{stat.label}</h4>
          <p className="planet-stats__value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PlanetStats; 