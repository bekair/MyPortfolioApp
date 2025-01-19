import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext'
import Layout from '../components/layout/Layout'
import { Toaster } from 'react-hot-toast'
import { toastConfig } from '../components/config/toast.config'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Toaster {...toastConfig} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp 