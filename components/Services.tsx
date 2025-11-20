import React from 'react';
import { Partner } from '../types';
import { Bike, Car, Home, Banknote, Zap, Truck, Landmark } from 'lucide-react';

const partners: Partner[] = [
  {
    name: "Yamaha Consórcios",
    description: "Consórcios de motocicletas, automóveis, imóveis e produtos náuticos com a garantia da marca.",
    category: 'consorcio'
  },
  {
    name: "Banco Yamaha",
    description: "Financiamento de motocicletas e motores de popa com condições competitivas.",
    category: 'financiamento'
  },
  {
    name: "Consórcio Itaú",
    description: "Soluções para aquisição de automóveis e imóveis via cotas ativas e contempladas.",
    category: 'consorcio'
  },
  {
    name: "Galleria Bank",
    description: "Operações de Home Equity para clientes que buscam crédito estratégico com garantia real.",
    category: 'home-equity'
  },
  {
    name: "CashMe by Cyrela",
    description: "Home Equity estruturado para quem precisa de capital com rapidez e segurança.",
    category: 'home-equity'
  },
  {
    name: "Banco Inter",
    description: "Crédito com garantia imobiliária (Home Equity) com análise ágil e taxas diferenciadas.",
    category: 'home-equity'
  },
  {
    name: "Banco BV",
    description: "Financiamento de veículos leves e pesados, incluindo linhas para transporte e logística.",
    category: 'financiamento'
  },
  {
    name: "Evolua Energia",
    description: "Soluções em Mercado Livre de Energia para redução de custos operacionais e residenciais.",
    category: 'energia'
  }
];

const getIcon = (category: string) => {
  switch (category) {
    case 'consorcio': return <Landmark size={24} />;
    case 'financiamento': return <Car size={24} />;
    case 'home-equity': return <Banknote size={24} />;
    case 'energia': return <Zap size={24} />;
    default: return <Bike size={24} />;
  }
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">Ecossistema</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Parceiros de Peso</h3>
            <p className="text-zinc-400 mt-4">
              Atuamos com excelência representando instituições de alta solidez no mercado financeiro brasileiro.
            </p>
          </div>
          
          {/* Decorative LOGO representation */}
          <div className="hidden md:block">
             <h3 className="text-5xl font-thin tracking-[0.5em] text-zinc-800 opacity-50 select-none">CLASSBANK</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group border border-zinc-800 bg-zinc-950/50 p-8 hover:border-white hover:bg-zinc-900 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6 text-zinc-500 group-hover:text-white transition-colors">
                {getIcon(partner.category)}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{partner.name}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                {partner.description}
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-900 group-hover:border-zinc-700">
                 <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider group-hover:text-white transition-colors">Saiba Mais &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};