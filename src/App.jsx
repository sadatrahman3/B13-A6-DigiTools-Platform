import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tools from './components/Tools';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]); 
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some(item => item.id === product.id);
    if (isAlreadyInCart) {
      toast.warning(`${product.name} is already in your cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Stats />
        <Tools 
          cart={cart} 
          onAddToCart={handleAddToCart} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </main>
      <Footer />
    </div>
  );
}