import React, { useState } from 'react';
import { SimulationData, LeadData } from '../types';
import { ChevronRight, Check, DollarSign, Calendar } from 'lucide-react';

export const SimulationForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  
  const [simData, setSimData] = useState<SimulationData>({
    simulationType: 'total_value',
    amount: 50000,
    months: 60,
  });

  const [leadData, setLeadData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleNextStep = () => {
    if (simData.amount > 0 && simData.months > 0) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Nova Simulação - Class Negócios*\n\n` +
      `*Dados da Simulação:*\n` +
      `Tipo: ${simData.simulationType === 'total_value' ? 'Valor Total do Bem' : 'Valor por Parcela'}\n` +
      `Valor: R$ ${simData.amount.toLocaleString('pt-BR')}\n` +
      `Prazo: ${simData.months} meses\n\n` +
      `*Dados do Cliente:*\n` +
      `Nome: ${leadData.name}\n` +
      `Email: ${leadData.email}\n` +
      `WhatsApp: ${leadData.phone}\n` +
      `Cidade: ${leadData.city}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5562984317374?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section id="simulador" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">Planejamento</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Simule seu Consórcio</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Faça uma simulação personalizada agora mesmo. Escolha o valor do bem ou quanto quer pagar por mês, 
              defina o prazo e receba uma análise exclusiva da nossa equipe especializada.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Análise de crédito ágil",
                "Grupos com altas taxas de contemplação",
                "Atendimento personalizado por especialistas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <span className="bg-white text-black rounded-full p-1"><Check size={12} strokeWidth={4} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="bg-black border border-zinc-800 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-white group-hover:h-full transition-all duration-500 ease-in-out" />
            
            {step === 1 ? (
              <div className="animate-fade-in">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="bg-zinc-800 w-8 h-8 flex items-center justify-center text-sm rounded-full">1</span>
                  Defina os Valores
                </h4>
                
                {/* Type Toggle */}
                <div className="grid grid-cols-2 gap-2 bg-zinc-900 p-1 mb-8 rounded-lg">
                  <button
                    onClick={() => setSimData({ ...simData, simulationType: 'total_value' })}
                    className={`py-3 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors rounded-md ${
                      simData.simulationType === 'total_value' ? 'bg-white text-black' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Valor Total do Bem
                  </button>
                  <button
                    onClick={() => setSimData({ ...simData, simulationType: 'installment_value' })}
                    className={`py-3 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors rounded-md ${
                      simData.simulationType === 'installment_value' ? 'bg-white text-black' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Valor da Parcela
                  </button>
                </div>

                {/* Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      {simData.simulationType === 'total_value' ? 'Valor do Crédito (R$)' : 'Valor da Parcela (R$)'}
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input
                        type="number"
                        value={simData.amount}
                        onChange={(e) => setSimData({ ...simData, amount: Number(e.target.value) })}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-white transition-colors text-lg font-medium"
                      />
                    </div>
                    <p className="text-right text-zinc-500 text-sm mt-2">{formatCurrency(simData.amount)}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Prazo Desejado (Meses)
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input
                        type="number"
                        value={simData.months}
                        onChange={(e) => setSimData({ ...simData, months: Number(e.target.value) })}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-white transition-colors text-lg font-medium"
                      />
                    </div>
                    <input 
                      type="range" 
                      min="12" 
                      max="240" 
                      value={simData.months} 
                      onChange={(e) => setSimData({ ...simData, months: Number(e.target.value) })}
                      className="w-full mt-4 accent-white h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <button
                    onClick={handleNextStep}
                    className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    Continuar <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <button onClick={() => setStep(1)} className="text-xs text-zinc-500 uppercase tracking-wider hover:text-white mb-6 flex items-center gap-1">
                  &larr; Voltar
                </button>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="bg-zinc-800 w-8 h-8 flex items-center justify-center text-sm rounded-full">2</span>
                  Seus Dados
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    value={leadData.name}
                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    value={leadData.email}
                    onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="WhatsApp"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                      value={leadData.phone}
                      onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Cidade/UF"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                      value={leadData.city}
                      onChange={(e) => setLeadData({ ...leadData, city: e.target.value })}
                    />
                  </div>

                  <div className="pt-4">
                    <div className="bg-zinc-900 p-4 mb-6 border border-zinc-800 text-sm text-zinc-400">
                      <div className="flex justify-between mb-1">
                        <span>Valor:</span>
                        <span className="text-white font-bold">{formatCurrency(simData.amount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Prazo:</span>
                        <span className="text-white font-bold">{simData.months} Meses</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                      Receber Proposta <ChevronRight size={18} />
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};