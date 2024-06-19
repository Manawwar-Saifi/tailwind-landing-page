/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':"blue",
        'saifi':"orange"
      },
      fontFamily:{
        'body':["Inter", 'sans-serif'],
        'display':["Poppins"] 
      }
    },

  },
  plugins: [],
}

