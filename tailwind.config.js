/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F3EFFD',
          100: '#E7DFFB',
          200: '#D0BFF6',
          300: '#B99FF2',
          400: '#B18AF9',
          500: '#9B6FE8',
          600: '#8556D6',
          700: '#6E3DC4',
          800: '#5728A3',
          900: '#411C82',
          DEFAULT: '#9B6FE8',
        },
        secondary: {
          50: '#FFF3EF',
          100: '#FFE7DE',
          200: '#FFCFBD',
          300: '#FFB79C',
          400: '#FF9F7B',
          500: '#FF6D33',
          600: '#FF4500',
          700: '#CC3700',
          800: '#992900',
          900: '#661B00',
          DEFAULT: '#FF6D33',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        success: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Lexend', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgb(0 0 0 / 0.05)',
        'medium': '0 4px 16px 0 rgb(0 0 0 / 0.08)',
        'large': '0 10px 40px 0 rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
}

