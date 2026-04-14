import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar cartCount={0} />
      <main>
        <Hero />
        <Stats />
        {/* Tools and other sections will go here later */}
      </main>
      <Footer />
    </div>
  );
}