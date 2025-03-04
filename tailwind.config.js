/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxurious red and white theme
        luxury: {
          red: {
            50: '#FFF5F5',
            100: '#FED7D7',
            200: '#FEB2B2', 
            300: '#FC8181',
            400: '#F56565',
            500: '#E53E3E', // Primary red
            600: '#C53030',
            700: '#9B2C2C',
            800: '#822727',
            900: '#63171B',
          },
          white: {
            pure: '#FFFFFF',
            off: '#F7FAFC',
            cream: '#FFF8E6',
            pearl: '#F0F0F0',
          },
          gold: {
            light: '#F9DA8B',
            main: '#D4AF37', // Accent gold
            dark: '#AA8C2C',
          },
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            300: '#D1D5DB',
            500: '#6B7280',
            700: '#374151',
            900: '#111827',
          },
          black: '#000000',
        },
        // Keep SGDS colors for backward compatibility
        sgds: {
          // Brand colors
          primary: '#7857FF',
          secondary: '#1F69FF',
          // System colors
          blue: '#0F71BB',
          amber: '#F79009',
          green: '#0A8217',
          red: '#D7260F',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #C53030 0%, #E53E3E 50%, #C53030 100%)',
        'gold-gradient': 'linear-gradient(to right, #BF953F, #FCF6BA, #D4AF37, #FBF5B7, #AA771C)',
      },
      boxShadow: {
        'luxury': '0 10px 25px -5px rgba(197, 48, 48, 0.1), 0 8px 10px -6px rgba(197, 48, 48, 0.1)',
        'luxury-sm': '0 4px 6px -1px rgba(197, 48, 48, 0.05), 0 2px 4px -1px rgba(197, 48, 48, 0.05)',
        'luxury-md': '0 10px 15px -3px rgba(197, 48, 48, 0.1), 0 4px 6px -2px rgba(197, 48, 48, 0.05)',
        'luxury-lg': '0 20px 25px -5px rgba(197, 48, 48, 0.1), 0 10px 10px -5px rgba(197, 48, 48, 0.04)',
        'luxury-xl': '0 25px 50px -12px rgba(197, 48, 48, 0.25)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-luxury': 'pulseLuxury 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseLuxury: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
      },
    },
  },
  plugins: [],
} 