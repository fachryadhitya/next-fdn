module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '18%': '18%',
        '32%': '32%',
        '48%': '48%'
      },
      height: {
        200: '200px',
        415: '415px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
