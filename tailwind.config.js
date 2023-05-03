/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      darkBlue: 'hsl(218, 23%, 16%)',
      darkGrayish: 'hsl(217, 19%, 24%)',
      grayishBlue: 'hsl(217, 19%, 38%)',
      lightCyan: 'hsl(193, 38%, 86%)',
      neonGreen: 'hsl(150, 100%, 66%)',
      white: '#ffffff'
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}

