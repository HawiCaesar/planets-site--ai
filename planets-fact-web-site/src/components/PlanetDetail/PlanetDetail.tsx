import React, { useState } from 'react';
import type { Planet, TabType } from '../../types/Planet';
import { getTabData } from '../../services/planetService';
import PlanetImage from '../PlanetImage/PlanetImage';
import PlanetContent from '../PlanetContent/PlanetContent';
import TabNavigation from '../TabNavigation/TabNavigation';
import PlanetStats from '../PlanetStats/PlanetStats';
import './PlanetDetail.css';

interface PlanetDetailProps {
  planet: Planet;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({ planet }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const tabData = getTabData(planet, activeTab);

  return (
    <main className="planet-detail">
      <div className="planet-detail__container">
        <div className="planet-detail__content">
          <div className="planet-detail__image">
            <PlanetImage planet={planet} activeTab={activeTab} />
          </div>
          
          <div className="planet-detail__info">
            <PlanetContent tabData={tabData} planetName={planet.name} />
            <TabNavigation 
              activeTab={activeTab}
              onTabChange={handleTabChange}
              planetName={planet.name}
            />
          </div>
        </div>
        
        <PlanetStats planet={planet} />
      </div>
    </main>
  );
};

export default PlanetDetail; 