import { LANGUAGE_CODES, COUNTRY_CODES, LANGUAGE_NAMES } from './constants';

export const languages = [
  { 
    code: LANGUAGE_CODES.ENGLISH, 
    name: LANGUAGE_NAMES[LANGUAGE_CODES.ENGLISH], 
    countryCode: COUNTRY_CODES.UK 
  },
  { 
    code: LANGUAGE_CODES.TURKISH, 
    name: LANGUAGE_NAMES[LANGUAGE_CODES.TURKISH], 
    countryCode: COUNTRY_CODES.TURKEY 
  },
  { 
    code: LANGUAGE_CODES.DUTCH, 
    name: LANGUAGE_NAMES[LANGUAGE_CODES.DUTCH], 
    countryCode: COUNTRY_CODES.NETHERLANDS 
  },
  { 
    code: LANGUAGE_CODES.POLISH, 
    name: LANGUAGE_NAMES[LANGUAGE_CODES.POLISH], 
    countryCode: COUNTRY_CODES.POLAND 
  }
] as const;

export type { LanguageCode } from './constants';