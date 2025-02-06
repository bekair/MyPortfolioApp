export const LANGUAGE_CODES = {
  ENGLISH: 'en',
  TURKISH: 'tr',
  DUTCH: 'nl',
  POLISH: 'pl'
} as const;

export const COUNTRY_CODES = {
  UK: 'GB',
  TURKEY: 'TR',
  NETHERLANDS: 'NL',
  POLAND: 'PL'
} as const;


export const LANGUAGE_NAMES = {
  [LANGUAGE_CODES.ENGLISH]: 'English',
  [LANGUAGE_CODES.TURKISH]: 'Türkçe',
  [LANGUAGE_CODES.DUTCH]: 'Nederlands',
  [LANGUAGE_CODES.POLISH]: 'Polski'
} as const;


export const LANGUAGE_TO_COUNTRY = {
  [LANGUAGE_CODES.ENGLISH]: COUNTRY_CODES.UK,
  [LANGUAGE_CODES.TURKISH]: COUNTRY_CODES.TURKEY,
  [LANGUAGE_CODES.DUTCH]: COUNTRY_CODES.NETHERLANDS,
  [LANGUAGE_CODES.POLISH]: COUNTRY_CODES.POLAND
} as const;

export type LanguageCode = typeof LANGUAGE_CODES[keyof typeof LANGUAGE_CODES];
export type CountryCode = typeof COUNTRY_CODES[keyof typeof COUNTRY_CODES]; 