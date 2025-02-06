"use client";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

import NotFound from '@/components/http-errors/NotFound';

export default function LocaleNotFound() {
  return <NotFound />;
}