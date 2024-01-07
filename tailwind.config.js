import tailwindcssAnimated from 'tailwindcss-animated';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      screens: {
        xs: '480px',
        lg: '992px',
      },

      fontFamily: {
        pop: ['pop', 'sans-serif'],
        mont: ['Montserrat-Regular', 'sans-serif'],
      },

      backgroundImage: {
        hero: 'url(./src/assets/images/hero/hero-1.jpg)',
        // 'hero2' : 'url(@/assets/images/hero/hero-1.jpg)',
      },
      height: {
        hero_size: 'calc(100vh - 142px)',
      },
      container: {
        center: true,
      },
      colors: {
        brand_color: '#F9B809',
        s_gray: '#333',
        txt_clr: '#454545',
        heading: '#1d2736',
      },
    },
  },
  plugins: [tailwindcssAnimated],
};
