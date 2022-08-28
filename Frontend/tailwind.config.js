/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: '	#F5F5F5',
      black:"black",
      blue:"#3662d8",
      white:"#FFFFFF",
      graylight:"#343B53",
      green:"#006400",
      darkgreen:"#0d7066",
      banner:"#d3d3d3",
    },
    screens: {
      "mobile":"500px",
      'tablet': '720px',
      "filter":"820px",
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend:{
      
    }
  },
  plugins: [],
}
