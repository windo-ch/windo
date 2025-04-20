/**
 * Utility functions for industry-related operations
 */

/**
 * Generates a URL for the project questionnaire with the industry pre-filled
 * @param industry - The industry to pre-fill in the questionnaire
 * @returns The URL with query parameters
 */
export const getProjectUrlWithIndustry = (industry: string): string => {
  return `/project?industry=${encodeURIComponent(industry)}`;
};

/**
 * Maps an industry slug to a display name
 * This can be used when we need to convert URL slugs to proper display names
 */
export const industrySlugToDisplayName: Record<string, string> = {
  'accounting-firms': 'Accounting Firm',
  'architecture-firms': 'Architecture Firm',
  'art-galleries': 'Art Gallery',
  'boutiques': 'Boutique',
  'cafes': 'Cafe',
  'car-dealerships': 'Car Dealership',
  'consultants': 'Consultant',
  'coworking-spaces': 'Coworking Space',
  'craft-breweries': 'Craft Brewery',
  'dental-clinics': 'Dental Clinic',
  'event-planners': 'Event Planner',
  'fashion-brands': 'Fashion Brand',
  'fitness-studios': 'Fitness Studio',
  'hair-salon': 'Hair Salon',
  'hotels': 'Hotel',
  'interior-designers': 'Interior Designer',
  'jewelry-stores': 'Jewelry Store',
  'law-firms': 'Law Firm',
  'marketing-agencies': 'Marketing Agency',
  'medical-practices': 'Medical Practice',
  'music-schools': 'Music School',
  'photography-studios': 'Photography Studio',
  'real-estate': 'Real Estate Agency',
  'restaurants': 'Restaurant',
  'retail-stores': 'Retail Store',
  'spas': 'Spa',
  'tech-startups': 'Tech Startup',
  'travel-agencies': 'Travel Agency',
  'wedding-planners': 'Wedding Planner',
  'yoga-studios': 'Yoga Studio'
}; 