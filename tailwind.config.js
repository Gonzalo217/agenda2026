/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        institutional: {
          blue: '#005f99',
          lightBlue: '#51b9ff',
          sky: '#dff1ff',
          gray: '#e8eef4'
        }
      },
      boxShadow: {
        soft: '0 20px 40px -18px rgba(0, 95, 153, 0.35)'
      },
      backgroundImage: {
        hero: "linear-gradient(120deg, rgba(0,42,74,0.85), rgba(0,95,153,0.65)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')"
      }
    }
  },
  plugins: []
};
