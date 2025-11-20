import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SimulationForm } from './components/SimulationForm';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <SimulationForm />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;