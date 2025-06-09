export interface NewsItem {
  id: string;
  title: string;
  img: string;
  thumbnail?: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface StoreInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  lat: number;
  lng: number;
  accessibility: boolean;
  parking: boolean;
}

export interface BrandInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
}

export interface NewsFilters {
  searchTerm: string;
  selectedCategory: string;
  currentPage: number;
}

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'CLT' | 'Estágio';
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}