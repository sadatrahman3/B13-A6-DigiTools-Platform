import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar cartCount={0} />
      <main>
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">Project Initialized</h1>
          <p>Setting up the DigiTools Platform...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}