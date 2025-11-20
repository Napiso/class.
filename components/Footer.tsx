import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="mb-6">
                <h1 className="text-2xl font-extrabold tracking-tighter text-white">
                  Class<span className="text-zinc-500">.</span>
                </h1>
                <span className="text-xs tracking-widest text-zinc-400 font-medium uppercase ml-1">Negócios</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8">
              Desenvolvemos estratégias personalizadas para cada cliente — seja para investir, expandir negócios ou realizar projetos pessoais.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/class_negocios/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Contato</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white" />
                <a href="https://wa.me/5562984317374" className="hover:text-white transition-colors">+55 62 98431-7374</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white" />
                <a href="mailto:atendimento@classnegocios.com.br" className="hover:text-white transition-colors">atendimento@classnegocios.com.br</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-1" />
                <span>Goiânia - GO</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Links Rápidos</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Parceiros</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#franz" className="hover:text-white transition-colors">Especialista</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} Class Negócios. Todos os direitos reservados.
          </p>
          <p className="text-zinc-700 text-xs uppercase tracking-wider">
            Design & Tech
          </p>
        </div>
      </div>
    </footer>
  );
};