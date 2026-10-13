import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import RfqModal from './components/RfqModal';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Brands from './pages/Brands';
import Clients from './pages/Clients';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenRfq = (productName = '') => {
    setRfqProduct(productName || 'General Industrial Equipment');
    setRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqModalOpen(false);
  };

  const handleToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar onOpenRfq={handleOpenRfq} />

        <main>
          <Routes>
            <Route path="/" element={<Home onOpenRfq={handleOpenRfq} onToast={handleToast} />} />
            <Route path="/about" element={<About onOpenRfq={handleOpenRfq} />} />
            <Route path="/products" element={<Products onOpenRfq={handleOpenRfq} />} />
            <Route path="/brands" element={<Brands onOpenRfq={handleOpenRfq} />} />
            <Route path="/clients" element={<Clients onOpenRfq={handleOpenRfq} />} />
            <Route path="/blog" element={<Blog onOpenRfq={handleOpenRfq} />} />
            <Route path="/contact" element={<Contact onToast={handleToast} />} />
            <Route path="*" element={<Home onOpenRfq={handleOpenRfq} onToast={handleToast} />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />

        <RfqModal
          isOpen={rfqModalOpen}
          initialProduct={rfqProduct}
          onClose={handleCloseRfq}
          onToast={handleToast}
        />

        <Toast message={toastMessage} />
      </div>
    </Router>
  );
}
