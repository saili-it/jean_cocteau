/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary cyan/turquoise (from logo "Jean Cocteau" script)
        primary: {
          50: '#ecfaff',
          100: '#cff2fe',
          200: '#a8e8fc',
          300: '#6dd9f9',
          400: '#33c5f0',
          500: '#22b8e6',
          600: '#0e8fbb',
          700: '#0d7396',
          800: '#125e7b',
          900: '#144e68',
          950: '#093246',
        },
        // Secondary green (from logo "International School")
        secondary: {
          50: '#f4faec',
          100: '#e6f3d3',
          200: '#cee7ab',
          300: '#aed47a',
          400: '#92c54f',
          500: '#7cc242',
          600: '#5a9728',
          700: '#477523',
          800: '#3a5d20',
          900: '#324f1f',
          950: '#182c0c',
        },
        // Accent yellow (from logo swoosh)
        accent: {
          50: '#fefbe8',
          100: '#fef5c3',
          200: '#fde98a',
          300: '#fbd647',
          400: '#f5d547',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Neutral grays (warm, soft)
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
    },
  },
  plugins: [],
}
