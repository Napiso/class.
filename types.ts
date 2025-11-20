export interface Partner {
  name: string;
  description: string;
  category: 'consorcio' | 'financiamento' | 'home-equity' | 'energia';
}

export interface SimulationData {
  simulationType: 'total_value' | 'installment_value';
  amount: number;
  months: number;
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  city: string;
}