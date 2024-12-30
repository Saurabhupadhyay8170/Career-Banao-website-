/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBtn:"#ff8c28",
        hoverBtn:"#e67e22",
        footerBg:"#1f618d",
        primaryNavBackground:"#34495e",
        primaryNavText:"#2c3e50",
        careerOrange: '#F89A00'
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
      },
      fontWeight: {
        custom: '500', 
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        'border-color': 'borderColorChange 5s infinite alternate',
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        borderColorChange: {
          '0%': { borderColor: '#4caf50' }, // Green
          '25%': { borderColor: '#2196f3' }, // Blue
          '50%': { borderColor: '#ff9800' }, // Amber
          '75%': { borderColor: '#e91e63' }, // Pink
          '100%': { borderColor: '#4caf50' }, // Back to Green
        }
      },
      
    },
  },
  plugins: [],
}
