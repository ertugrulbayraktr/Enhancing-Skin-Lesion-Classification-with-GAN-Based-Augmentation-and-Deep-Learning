/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891b2',
          dark: '#0e7490',
          light: '#06b6d4',
        },
        accent: {
          teal: '#14b8a6',
          emerald: '#10b981',
        },
        status: {
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          info: '#3b82f6',
        },
        // Dark theme colors (flat structure for utility classes)
        'dark-bg': '#0f172a',        // slate-900
        'dark-card': '#1e293b',       // slate-800
        'dark-border': '#334155',     // slate-700
        'dark-hover': '#475569',      // slate-600
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(8, 145, 178, 0.3)',
        'glow-lg': '0 0 30px rgba(8, 145, 178, 0.4)',
        'glow-teal': '0 0 25px rgba(20, 184, 166, 0.3)',
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(8, 145, 178, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(8, 145, 178, 0.6)' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}

