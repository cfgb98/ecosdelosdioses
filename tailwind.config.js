/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js,ts,vue,jsx,tsx}'
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Lora','serif'],
        display:[
            'Cinzel',
            'serif'
        ]
      }
    },
  },
  plugins: [],
}

