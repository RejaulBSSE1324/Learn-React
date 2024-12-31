import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/review" element={<Review />} />
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productKey" element={<ProductDetails/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
