import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext'
import Layout from '../components/layout/Layout'
import { Toaster } from 'react-hot-toast'
import { toastConfig } from '../components/config/toast.config'
import '../styles/globals.css'
import { IntlProvider } from 'next-intl'
import { LanguageProvider } from '../context/LanguageContext'

const AppContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Toaster {...toastConfig} />
        {children}
      </Layout>
    </ThemeProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <IntlProvider messages={pageProps.messages} locale="en">
        <AppContent>
          <Component {...pageProps} />
        </AppContent>
      </IntlProvider>
    </LanguageProvider>
  );
}

export default MyApp; 