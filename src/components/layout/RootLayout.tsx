"use client";

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';
import { Toaster } from 'react-hot-toast';
import { toastConfig } from '@/components/config/toast.config';
import '@/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
  locale: string;
  messages: any;
}

export default function RootLayout({ children, locale, messages }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <head>
        <title>BCB Portfolio</title>
        <meta name="description" content="Bekir Can Baykal's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Layout>
              <Toaster {...toastConfig} />
              {children}
            </Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 