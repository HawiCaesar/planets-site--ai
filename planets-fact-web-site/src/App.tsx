import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { getPlanetByName } from './services/planetService';
import Header from './components/Header/Header';
import PlanetDetail from './components/PlanetDetail/PlanetDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/mercury" replace />} />
          <Route path="/:planetName" element={<PlanetPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function PlanetPage() {
  const { planetName } = useParams<{ planetName: string }>();
  const planet = getPlanetByName(planetName || '');

  if (!planet) {
    return <Navigate to="/mercury" replace />;
  }

  return <PlanetDetail planet={planet} />;
}

export default App;
