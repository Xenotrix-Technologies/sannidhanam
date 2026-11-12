export type PageRoute = 'home' | 'about' | 'services' | 'machinery' | 'projects' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  applications: string[];
  keyBenefits: string[];
  recommendedMachinery: string[];
  badge?: string;
}

export interface MachineryItem {
  id: string;
  name: string;
  model: string;
  category: 'excavator' | 'backhoe' | 'bulldozer' | 'tipper' | 'breaker';
  tagline: string;
  description: string;
  image: string;
  available: boolean;
  rentalTypes: string[];
  specs: {
    operatingWeight?: string;
    enginePower?: string;
    bucketCapacity?: string;
    maxDigDepth?: string;
    bladeCapacity?: string;
    payloadCapacity?: string;
    operatorType: 'Certified Operator Included' | 'Dry/Wet Hire Available';
  };
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Excavation' | 'Land Clearing' | 'Foundation' | 'Road Support' | 'Demolition' | 'Materials';
  location: string;
  duration: string;
  image: string;
  scope: string;
  machineryUsed: string[];
  clientType: 'Commercial Developer' | 'Infrastructure Project' | 'Residential Construction' | 'Industrial Park';
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  icon?: string;
  applications: string;
  deliveryUnits: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  project: string;
  location: string;
  quote: string;
  rating: number;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email?: string;
  serviceOrMachinery: string;
  location: string;
  startDate?: string;
  duration?: string;
  notes?: string;
}

