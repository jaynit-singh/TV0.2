/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A66C2',
        accent: '#E10600',
        dark: '#0F0F0F',
        light: '#FFFFFF',
        gray: '#F4F6F8',
        // Professional Tech Branding Colors
        'royal-blue': '#0A66C2',
        'accent-red': '#E10600',
        'tech-black': '#0F0F0F',
        'tech-white': '#FFFFFF',
        'light-gray': '#F4F6F8',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #0A66C2, #E10600)',
      },
    },
  },
  plugins: [],
}
