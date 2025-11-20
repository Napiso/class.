import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop" 
          alt="Black Luxury Car" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="bg-zinc-900/80 border border-zinc-700 px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase text-zinc-300 backdrop-blur-sm">
              Desde 2011
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            CRÉDITO INTELIGENTE. <br />
            <span className="text-zinc-500">FUTURO GARANTIDO.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            Conectamos pessoas e empresas às melhores oportunidades em consórcios, financiamentos e home equity.
            Solidez, segurança e excelência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#simulador" 
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all"
            >
              Simular Agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos" 
              className="flex items-center justify-center gap-3 border border-zinc-700 bg-black/50 backdrop-blur-sm text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 hover:border-white transition-all"
            >
              Nossos Parceiros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};