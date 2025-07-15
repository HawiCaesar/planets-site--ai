import type { Planet, TabType, TabData } from '../types/Planet';
import planetsData from '../data.json';

const planets: Planet[] = planetsData as Planet[];

export const getPlanetByName = (name: string): Planet | undefined => {
  return planets.find(planet => planet.name.toLowerCase() === name.toLowerCase());
};

export const getPlanetNames = (): string[] => {
  return planets.map(planet => planet.name);
};

export const getTabData = (planet: Planet, activeTab: TabType): TabData => {
  switch (activeTab) {
    case 'overview':
      return {
        label: 'Overview',
        content: planet.overview,
        image: planet.images.planet
      };
    case 'structure':
      return {
        label: 'Internal Structure', 
        content: planet.structure,
        image: planet.images.internal
      };
    case 'geology':
      return {
        label: 'Surface Geology',
        content: planet.geology,
        image: planet.images.planet // Base planet image for geology
      };
    default:
      return {
        label: 'Overview',
        content: planet.overview,
        image: planet.images.planet
      };
  }
};

export const getPlanetColors = (): Record<string, string> => {
  return {
    Mercury: '#419EBB',
    Venus: '#EDA249', 
    Earth: '#6D2ED5',
    Mars: '#D14C32',
    Jupiter: '#D83A34',
    Saturn: '#FAD5A5',
    Uranus: '#4FD0E7',
    Neptune: '#4B70DD'
  };
}; 