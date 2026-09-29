export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'LKR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to USD = 1
  label: string;
}

export type ViewTab = 'home' | 'tours' | 'destinations' | 'experiences' | 'about-us' | 'blog' | 'contact';

export interface TourItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  stay: string;
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  daysCount: number;
  route: string;
  basePriceUSD: number;
  rating: number;
  reviewCount: number;
  image: string;
  altText: string;
  carbonOffsetPercent: number;
  maxGuests: number;
  style: 'Wildlife' | 'Highlands & Tea' | 'Culture & Heritage' | 'Coastal & Marine' | 'Grand Odyssey';
  tags: string[];
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: TourItineraryDay[];
  featured?: boolean;
}

export type DestinationCategory = 'all' | 'highlands' | 'coast' | 'ancient' | 'wildlife';

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: string;
  category: 'highlands' | 'coast' | 'ancient' | 'wildlife';
  bestMonths: string;
  elevation?: string;
  image: string;
  altText: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  recommendedStay: string;
  keyWildlife?: string[];
  colSpan?: string;
}

export interface Experience {
  id: string;
  title: string;
  badge: string;
  duration: string;
  image: string;
  altText: string;
  description: string;
  fullDetails: string;
  credentialTag: string;
  credentialIcon: string;
  idealFor: string;
  difficulty: 'Gentle' | 'Moderate' | 'Active';
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  altText: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
}

export interface Testimonial {
  id: string;
  names: string;
  location: string;
  tourName: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  avatarColor: string;
}

export interface NaturalistGuide {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  bio: string;
  image: string;
}
