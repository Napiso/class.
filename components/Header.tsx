import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Text based on image */}
        <div className="flex flex-col leading-none cursor-pointer select-none" onClick={() => window.scrollTo(0,0)}>
          <h1 className="text-3xl font-extrabold tracking-tighter text-white">
            Class<span className="text-zinc-500">.</span>
          </h1>
          <span className="text-xs tracking-widest text-zinc-400 font-medium uppercase ml-1">Negócios</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#simulador" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">Simulador</a>
          <a href="#servicos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">Parceiros</a>
          <a href="#sobre" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">Sobre</a>
          <a href="#franz" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider">O Especialista</a>
          <a 
            href="https://wa.me/5562984317374" 
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 animate-fade-in p-6 flex flex-col gap-6">
          <a href="#simulador" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Simulador</a>
          <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Parceiros</a>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Sobre</a>
          <a href="#franz" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Franz Friedrich</a>
          <a 
            href="https://wa.me/5562984317374"
            className="bg-white text-black text-center py-3 font-bold uppercase tracking-wide"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};