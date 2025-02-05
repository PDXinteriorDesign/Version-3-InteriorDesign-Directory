/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f5',
          100: '#e9ede7',
          200: '#d4dcd0',
          300: '#b5c2af',
          400: '#94a187',
          500: '#778a6c',
          600: '#5f6f56',
          700: '#4d5945',
          800: '#41493b',
          900: '#373e32',
        },
        terracotta: {
          50: '#fbf7f6',
          100: '#f5eae7',
          200: '#e8d1cb',
          300: '#d7b0a6',
          400: '#c18d7f',
          500: '#8b5d4e',
          600: '#7a4f41',
          700: '#664237',
          800: '#553830',
          900: '#48302a',
        },
        coral: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ff9f94',
          400: '#ff6b59',
          500: '#ff3d2e',
          600: '#ed1c0c',
          700: '#c51509',
          800: '#a3150d',
          900: '#861712',
        },
        azure: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd1fd',
          400: '#36baf9',
          500: '#0c9ee8',
          600: '#0180c5',
          700: '#0267a0',
          800: '#065785',
          900: '#0b496e',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};