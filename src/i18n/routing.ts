import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import { LANGUAGE_CODES } from './constants';
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [LANGUAGE_CODES.ENGLISH, LANGUAGE_CODES.TURKISH, LANGUAGE_CODES.DUTCH, LANGUAGE_CODES.POLISH],
 
  // Used when no locale matches
  defaultLocale: LANGUAGE_CODES.ENGLISH
});
 

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);