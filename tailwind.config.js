/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zdaBG: {
          dark: '#0b0a0d',
          darkCard: '#0f0e11',
          light: '#fafafa',
          lightCard: '#f0f0f0',
          lighterCard: '#f5f5f5',
        },
        zdaText: {
          dark: '#19141a',
          darker: '#161117',
          light: '#fafafafa',
          lighter: '#fdfdfd',
        },
        zdaRed: {
          50: '#fdf4f2',
          100: '#fbe3e0',
          200: '#f7cdc9',
          300: '#f2a1a3',
          400: '#ea6c76',
          500: '#e43f58',
          600: '#ff0037',
          700: '#c61044',
          800: '#a21043',
          900: '#881646',
          950: '#4b0628',
        },
        zdaRedpink: {
          50: '#ffe5f3',
          100: '#ffd6eb',
          200: '#ffbddd',
          300: '#ff8fbc',
          400: '#ff528e',
          500: '#ff1a62',
          600: '#ff0048',
          700: '#c7002b',
          800: '#a30021',
          900: '#880218',
          950: '#470001',
        },
        zdaBlue: {
          50: '#edf7ff',
          100: '#d6eaff',
          200: '#b7ddff',
          300: '#85c8ff',
          400: '#4ca9ff',
          450: '#49a1ff',
          500: '#2284ff',
          550: '#166AE8', // used for hover on 500
          600: '#0b62ff',
          700: '#044af1',
          800: '#0b3cc2',
          900: '#0f3590',
          950: '#0f245c',
          1000: '#0a172e',
        }
      },
      dropShadow: {
        'logo-light': '20px 8px 4px #19141a35',
        'logo-dark': '8px 4px 6px #606060b5',
        'logo-blue': '8px 4px 6px #2284ff9a',
        'logo-redpink': '8px 4px 6px #ff00489f',
        'logo-red': '8px 4px 6px #ff00379a',
        'name-sm-light': '-2px 0 1px #19141a2a',
        'name-sm-dark': '-4px 0 3px #6060607a',
        'z-logo-hover-light': '0 0 5px #2284ffd0',
        'z-logo-hover-dark': '0 0 5px #b7ddfff0',
      },
      fontFamily: {
        'outfit': 'Outfit',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    screens: {
      'xxs': '320px',
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2500px',
      '4xl': '3000px',
      '4k': '3840px',
    },
  },
  plugins: [],
}

