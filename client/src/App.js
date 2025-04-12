import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Contacts from './pages/Contacts/Contacts';
import Products from './pages/Products/Products';
// import Sales from './pages/Sales/Sales';
import Shipments from './pages/Shipments/Shipments';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Shipments />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
