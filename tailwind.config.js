module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['Maven Pro', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      bold: 700,
     },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        'primary-blue': '#34a7ff',
        'primary-white': '#fffffe',
        'primary-black': '#141414',
        'primary-grey': '#9ba4ad',
        'primary-fucsia': '#EF4565',
      },
      backgroundColor: {
        black: '#141414',
      },
      borderRadius: {
        default: '0.25rem',
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.5rem',
        '2xl': '1.625rem',
        '3xl': '1.75rem',
        '4xl': '3rem',
        '5xl': '5rem',
       },
       height: {
         '600': '37.5rem'
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
