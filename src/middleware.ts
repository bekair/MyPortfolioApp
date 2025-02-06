import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames and not-found
  matcher: ['/', '/(en|tr|nl|pl)/:path*']
};