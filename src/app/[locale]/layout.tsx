import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';
import { Toaster } from 'react-hot-toast';
import { toastConfig } from '@/components/config/toast.config';
import '@/styles/globals.css';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
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