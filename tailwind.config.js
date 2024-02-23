/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Lato'],
        second: ['"Josefin Sans"'],
      },
      colors: {
        'bg-hero': '#f2f0ff',
        bg_product: '#f6f7fb',
        bg_shade: '#eeeffb',
        'grey-text': 'rgba(21, 24, 117, 0.1)',
        accent: '#fb2e86',
        second: '#0d0e43',
        white: '#fff',
        black: '#000',
        purple: '#9f63b5',
        pink: '#fb2e86',
        violet: '#7e33e0',
        text: '#151875',
        title: '#1a0b5b',
        'sky-blue': '#00c1fe',
        'section-hover': '#2f1ac4',
        'sale-tag-color': '#3f509e',
        'price-tag-color': '#fb2448',
        'sub-text-color': '#8a8fb9',
        'page-button-color': '#e0d3f5',
      },
      height: {
        'slider-img': '689px',
      },
      content: {
        hero: 'url(/src/assets/images/hero/image-32.png)',
      },
    },
  },
  plugins: [],
};
