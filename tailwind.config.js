/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        // Fluid typography: clamp(min, preferred, max)
        // Base size scales from 16px to 18px between 320px and 1280px viewports
        xs: 'clamp(0.75rem, 0.70rem + 0.25vw, 0.875rem)',
        sm: 'clamp(0.875rem, 0.83rem + 0.22vw, 1rem)',
        base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',
        xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',
        '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.5rem)',
        '4xl': 'clamp(2.25rem, 2rem + 1.25vw, 3.5rem)',
        '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)',
        '6xl': 'clamp(3.75rem, 3.25rem + 3vw, 5.5rem)',
        '7xl': 'clamp(4.5rem, 3.75rem + 3.75vw, 6.5rem)',
        '8xl': 'clamp(6rem, 5rem + 5vw, 8rem)',
        '9xl': 'clamp(8rem, 6rem + 6vw, 10rem)',
      },
      spacing: {
        // Fluid spacing for improved layout balance
        'fluid-xs': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'fluid-sm': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)',
        'fluid-lg': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        'fluid-xl': 'clamp(4rem, 3rem + 5vw, 8rem)',
        'fluid-2xl': 'clamp(6rem, 4.5rem + 7.5vw, 12rem)',
        'fluid-3xl': 'clamp(8rem, 6rem + 10vw, 16rem)',
      },
      screens: {
        // Custom fluid breakpoints if needed, though we rely on fluid scaling
        'xs': '475px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: 'clamp(1rem, 5vw, 3rem)',
      },
    },
  },
  plugins: [],
};
