import { Language } from '../../contexts/LanguageContext';
import { accountingTranslations } from './accounting';
import { lawTranslations } from './law';
import { restaurantTranslations } from './restaurant';
import { photographyTranslations } from './photography';
import { dentalTranslations } from './dental';
import { hairSalonTranslations } from './hairSalon';
import { fitnessTranslations } from './fitness';
import { fashionTranslations } from './fashion';
import { retailTranslations } from './retail';
import { realEstateTranslations } from './realEstate';
import { yogaTranslations } from './yoga';
import { spaTranslations } from './spa';
import { cafeTranslations } from './cafe';
import { interiorDesignTranslations } from './interiorDesign';
import { artGalleryTranslations } from './artGallery';
import { boutiqueTranslations } from './boutique';
import { hotelTranslations } from './hotel';
import { marketingTranslations } from './marketing';
import { techStartupTranslations } from './techStartup';
import { coworkingSpaceTranslations } from './coworkingSpace';
import { educationalInstitutionTranslations } from './educationalInstitution';
import { consultingFirmTranslations } from './consultingFirm';
import { weddingPlannerTranslations } from './weddingPlanner';
import { craftBreweryTranslations } from './craftBrewery';
import { carDealershipTranslations } from './carDealership';
import { petServicesTranslations } from './petServices';
import { musicSchoolTranslations } from './musicSchool';
import { architectureTranslations } from './architecture';
import { jewelryTranslations } from './jewelry';
import { bakeryTranslations } from './bakery';
import { travelAgencyTranslations } from './travelAgency';
import { medicalTranslations } from './medical';
import { eventPlannerTranslations } from './eventPlanner';

// Define a type for our translation sets
type TranslationSet = Record<string, string>;

// Function to aggregate all industry translations based on the specified language
export function getIndustryTranslations(language: string): TranslationSet {
  return {
    ...accountingTranslations[language],
    ...lawTranslations[language],
    ...restaurantTranslations[language],
    ...photographyTranslations[language],
    ...dentalTranslations[language],
    ...hairSalonTranslations[language],
    ...fitnessTranslations[language],
    ...fashionTranslations[language],
    ...retailTranslations[language],
    ...realEstateTranslations[language],
    ...yogaTranslations[language],
    ...spaTranslations[language],
    ...cafeTranslations[language],
    ...interiorDesignTranslations[language],
    ...artGalleryTranslations[language],
    ...boutiqueTranslations[language],
    ...hotelTranslations[language],
    ...marketingTranslations[language],
    ...techStartupTranslations[language],
    ...coworkingSpaceTranslations[language],
    ...educationalInstitutionTranslations[language],
    ...consultingFirmTranslations[language],
    ...weddingPlannerTranslations[language],
    ...craftBreweryTranslations[language],
    ...carDealershipTranslations[language],
    ...petServicesTranslations[language],
    ...musicSchoolTranslations[language],
    ...architectureTranslations[language],
    ...jewelryTranslations[language],
    ...bakeryTranslations[language],
    ...travelAgencyTranslations[language],
    ...medicalTranslations[language],
    ...eventPlannerTranslations[language],
  };
}

// Individual exports for direct access to specific industry translations
export { accountingTranslations };
export { lawTranslations };
export { restaurantTranslations };
export { photographyTranslations };
export { dentalTranslations };
export { hairSalonTranslations };
export { fitnessTranslations };
export { fashionTranslations };
export { retailTranslations };
export { realEstateTranslations };
export { yogaTranslations };
export { spaTranslations };
export { cafeTranslations };
export { interiorDesignTranslations };
export { artGalleryTranslations };
export { boutiqueTranslations };
export { hotelTranslations };
export { marketingTranslations };
export { techStartupTranslations };
export { coworkingSpaceTranslations };
export { educationalInstitutionTranslations };
export { consultingFirmTranslations };
export { weddingPlannerTranslations };
export { craftBreweryTranslations };
export { carDealershipTranslations };
export { petServicesTranslations };
export { musicSchoolTranslations };
export { architectureTranslations };
export { jewelryTranslations };
export { bakeryTranslations };
export { travelAgencyTranslations };
export { medicalTranslations };
export { eventPlannerTranslations }; 