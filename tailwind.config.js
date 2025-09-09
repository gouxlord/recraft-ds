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
        // Core colors using CSS variables
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        
        // HR Business Entities
        'hr-employee': {
          DEFAULT: 'hsl(var(--hr-employee))',
          light: 'hsl(var(--hr-employee-light))',
          border: 'hsl(var(--hr-employee-border))',
        },
        'hr-job': {
          DEFAULT: 'hsl(var(--hr-job))',
          light: 'hsl(var(--hr-job-light))',
          border: 'hsl(var(--hr-job-border))',
        },
        'hr-position': {
          DEFAULT: 'hsl(var(--hr-position))',
          light: 'hsl(var(--hr-position-light))',
          border: 'hsl(var(--hr-position-border))',
        },
        'hr-contract': {
          DEFAULT: 'hsl(var(--hr-contract))',
          light: 'hsl(var(--hr-contract-light))',
          border: 'hsl(var(--hr-contract-border))',
        },
        'hr-training': {
          DEFAULT: 'hsl(var(--hr-training))',
          light: 'hsl(var(--hr-training-light))',
          border: 'hsl(var(--hr-training-border))',
        },
        'hr-mission': {
          DEFAULT: 'hsl(var(--hr-mission))',
          light: 'hsl(var(--hr-mission-light))',
          border: 'hsl(var(--hr-mission-border))',
        },
        'hr-skill': {
          DEFAULT: 'hsl(var(--hr-skill))',
          light: 'hsl(var(--hr-skill-light))',
          border: 'hsl(var(--hr-skill-border))',
        },
        'hr-team': {
          DEFAULT: 'hsl(var(--hr-team))',
          light: 'hsl(var(--hr-team-light))',
          border: 'hsl(var(--hr-team-border))',
        },
        
        // Skill Status
        'skill-critical': {
          DEFAULT: 'hsl(var(--skill-critical))',
          light: 'hsl(var(--skill-critical-light))',
          border: 'hsl(var(--skill-critical-border))',
        },
        'skill-improve': {
          DEFAULT: 'hsl(var(--skill-improve))',
          light: 'hsl(var(--skill-improve-light))',
          border: 'hsl(var(--skill-improve-border))',
        },
        'skill-acquired': {
          DEFAULT: 'hsl(var(--skill-acquired))',
          light: 'hsl(var(--skill-acquired-light))',
          border: 'hsl(var(--skill-acquired-border))',
        },
        'skill-expert': {
          DEFAULT: 'hsl(var(--skill-expert))',
          light: 'hsl(var(--skill-expert-light))',
          border: 'hsl(var(--skill-expert-border))',
        },
        
        // General Status
        'status-active': {
          DEFAULT: 'hsl(var(--status-active))',
          light: 'hsl(var(--status-active-light))',
        },
        'status-pending': {
          DEFAULT: 'hsl(var(--status-pending))',
          light: 'hsl(var(--status-pending-light))',
        },
        'status-inactive': {
          DEFAULT: 'hsl(var(--status-inactive))',
          light: 'hsl(var(--status-inactive-light))',
        },
        'status-success': {
          DEFAULT: 'hsl(var(--status-success))',
          light: 'hsl(var(--status-success-light))',
        },
        'status-warning': {
          DEFAULT: 'hsl(var(--status-warning))',
          light: 'hsl(var(--status-warning-light))',
        },
        
        // Keep some base colors for backward compatibility
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Tailwind default colors for gradients
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
        // Keep these for components that might still use them
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

