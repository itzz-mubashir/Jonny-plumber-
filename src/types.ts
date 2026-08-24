export type ServiceCategory = 'plumbing' | 'gas_heating';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
  isEmergency?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Bathrooms' | 'Plumbing' | 'Heating' | 'Wet Rooms';
  location: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  verified: boolean;
  content: string;
}

export interface CoverageArea {
  name: string;
  postcode?: string;
  priority?: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  urgency: 'routine' | 'urgent' | 'emergency';
}
