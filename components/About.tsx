import React from 'react';
import { MapPin, Award, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-900" id="sobre">
      
      {/* Company Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-4 border border-zinc-800 z-0 transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
               alt="Modern Architecture" 
               className="relative z-10 w-full h-[400px] object-cover grayscale filter contrast-125"
             />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">Sobre a Empresa</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Class Negócios</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Com sede em Goiânia-GO, a Class Negócios possui mais de 13 anos de experiência no gerenciamento do produto 
              consórcio e na linha de autofinanciamento.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Além disso, estamos presentes na Gestão de Estoque de veículos automotores de 3 concessionárias Jeep e Fiat, 
              além de uma parceria estratégica com a Saga Moto Yamaha na venda externa e exclusiva de motocicletas.
            </p>
            <div className="flex items-start gap-4">
              <MapPin className="text-white mt-1" size={20} />
              <div>
                <h5 className="text-white font-bold uppercase tracking-wide">Sede</h5>
                <p className="text-zinc-500 text-sm">Goiânia - Goiás</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Franz Section */}
      <div className="container mx-auto px-6" id="franz">
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 rounded-none">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <div className="aspect-[3/4] bg-zinc-800 overflow-hidden relative">
                 {/* Placeholder for Franz's Photo - Using a professional looking placeholder */}
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
                   alt="Franz Friedrich" 
                   className="w-full h-full object-cover grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                   <h4 className="text-xl font-bold text-white">Franz Friedrich</h4>
                   <p className="text-zinc-400 text-sm uppercase tracking-wider">CEO & Fundador</p>
                 </div>
               </div>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">O Especialista</h3>
              <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
                Franz Friedrich é o nome à frente da Class Negócios. Consolidado como um dos principais especialistas 
                do país em consórcio e autofinanciamento, ele ajuda pessoas físicas e jurídicas a realizarem projetos 
                e estruturarem capital com segurança.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                 <div className="bg-black p-6 border border-zinc-800">
                    <Award className="text-white mb-4" size={28} />
                    <h5 className="text-white font-bold mb-2">Certificações Internacionais</h5>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• 2 Certificações em Dubai</li>
                      <li>• 1 Certificação no Chile</li>
                      <li>• 1 Certificação na Argentina</li>
                    </ul>
                 </div>
                 <div className="bg-black p-6 border border-zinc-800">
                    <Briefcase className="text-white mb-4" size={28} />
                    <h5 className="text-white font-bold mb-2">Experiência</h5>
                    <p className="text-sm text-zinc-400">
                      Mais de 13 anos de atuação no mercado financeiro, com foco em alta performance e resultados.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};