import NotFound from '@/components/http-errors/NotFound';
import RootLayout from '@/components/layout/RootLayout';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';

// This page renders when a route like `/unknown...` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.
export default async function RootNotFound() {
  const messages = await getMessages({locale: routing.defaultLocale});

  return (
    <RootLayout locale={routing.defaultLocale} messages={messages}>
      <NotFound />
    </RootLayout>
  );
}