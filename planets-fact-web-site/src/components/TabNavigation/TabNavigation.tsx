import React from 'react';
import type { TabType } from '../../types/Planet';
import { getPlanetColors } from '../../services/planetService';
import './TabNavigation.css';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  planetName: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  planetName
}) => {
  const planetColors = getPlanetColors();
  const planetColor = planetColors[planetName];

  const tabs = [
    { key: 'overview' as TabType, label: 'Overview', number: '01' },
    { key: 'structure' as TabType, label: 'Internal Structure', number: '02' },
    { key: 'geology' as TabType, label: 'Surface Geology', number: '03' }
  ];

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`tab-navigation__button ${
            activeTab === tab.key ? 'tab-navigation__button--active' : ''
          }`}
          onClick={() => onTabChange(tab.key)}
          style={{
            '--planet-color': planetColor
          } as React.CSSProperties}
        >
          <span className="tab-navigation__number">{tab.number}</span>
          <span className="tab-navigation__label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation; 