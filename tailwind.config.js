// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#F7FAFC',
        300: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#19202D',
        900: '#121721',
      },
      blue: {
        700: '#1E1ADD',
      },
      red: {
        500: '#F03738',
        600: '#E53E3E',
      },
      green: {
        500: '#3CC13B',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
