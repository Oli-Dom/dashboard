import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ComicDetails from './Components/ComicDetails';
import Graph from './Components/Graph';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/comics/:id" element={<ComicDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </Router>
  );
}

export default App;

// path="/comics/:id"
