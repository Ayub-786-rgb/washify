export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  pricePerKg?: number;
  pricePerItem?: number;
}

export interface PricingPlan{
  id: string;
  name: string;
  price: number;
  unit: string;
  features: string[];
  popular?: boolean;
}