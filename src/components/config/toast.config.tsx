import { FaCheck, FaTimes } from 'react-icons/fa';
import { ToasterProps, IconTheme } from 'react-hot-toast';

export const toastConfig: ToasterProps = {
  position: 'top-right',
  toastOptions: {
    duration: 3000,
    style: {
      background: '#fff',
      color: '#333',
      padding: '16px 24px',
      borderRadius: '16px',
      fontSize: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: '300px',
    },
    success: {
      iconTheme: {
        primary: '#22c55e',
        secondary: '#fff',
      } as IconTheme,
      style: {
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
      },
    },
    error: {
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fff',
      } as IconTheme,
      style: {
        background: '#fef2f2',
        border: '1px solid #fecaca',
      },
    },
  },
}; 