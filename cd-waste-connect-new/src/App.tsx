import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ClassifyWaste from './pages/ClassifyWaste';
import Marketplace from './pages/Marketplace';
import FindFacilities from './pages/FindFacilities';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classify-waste" element={<ClassifyWaste />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/find-facilities" element={<FindFacilities />} />
      </Routes>
    </Router>
  );
};

export default App;