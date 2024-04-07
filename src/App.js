import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productpage from './pages/productpage/index';
import ProductSearch from "./pages/productsearch/index.js";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductSearch />} />
                <Route path="/Products/1" element={<Productpage />} />
            </Routes>
        </Router>
    )
}

export default App;