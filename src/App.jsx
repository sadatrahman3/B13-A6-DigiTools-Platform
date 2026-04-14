import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Tools from './components/Tools'; 
import Footer from './components/Footer';

export default function App() {
  
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar cartCount={0} />
      <main>
        <Hero />
        <Stats />
        <Tools 
          cart={[]} 
          activeTab="products" 
          setActiveTab={() => {}} 
        />
      </main>
      <Footer />
    </div>
  );
}