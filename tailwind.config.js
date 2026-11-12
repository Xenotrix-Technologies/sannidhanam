/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#111315',
          800: '#171A1D', // Primary Deep Charcoal
          700: '#1E2226',
          600: '#25292D', // Secondary Industrial Black
          500: '#33383D', // Dark Grey Text
          400: '#4D545C',
          300: '#757E88',
          200: '#B0B8C1',
          100: '#E4E7EB',
          50: '#F5F5F2',  // Background Off-White
        },
        yellow: {
          DEFAULT: '#FFB800', // Accent Heavy Equipment Yellow
          light: '#FFCA36',
          dark: '#E09F00',
          50: '#FFFBEA',
          100: '#FFF4C5',
          400: '#FFCA36',
          500: '#FFB800',
          600: '#E09F00',
          700: '#B88000',
        },
        industrial: {
          black: '#171A1D',
          dark: '#25292D',
          metal: '#3E464E',
          border: '#333A42',
          lightBorder: '#E5E7EB',
          offwhite: '#F5F5F2',
          cream: '#FAF9F6',
          hazard: '#FFB800',
          slate: '#8F9CA8',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Barlow Condensed"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'industrial': '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
        'yellow-glow': '0 0 25px -5px rgba(255, 184, 0, 0.4)',
        'yellow-sm': '0 0 15px -3px rgba(255, 184, 0, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}

