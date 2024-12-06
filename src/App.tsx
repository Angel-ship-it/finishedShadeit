import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { BestSellers } from './pages/BestSellers';
import { Location } from './pages/Location';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/best-sellers" element={<BestSellers />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
}

export default App;