import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage';
import StockPage from './pages/StockPage';
import StockList from './pages/StockList';
import SectorPage from './pages/SectorPage';
import SectorDetail from './pages/SectorDetail';
import LearnPage from './pages/LearnPage';  // Import the LearnPage component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stocks" element={<StockPage />} />
        <Route path="/stocks/:category" element={<StockList />} />
        <Route path="/sectors" element={<SectorPage />} />
        <Route path="/sectors/:sector" element={<SectorDetail />} />
        <Route path="/learn" element={<LearnPage />} />  {/* Add the route for LearnPage */}
      </Routes>
    </Router>
  );
}

export default App;
