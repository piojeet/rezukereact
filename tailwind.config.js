// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'ss': '367px',
        'sm': '500px',
        'md': '768px',
        'lg': '950px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1530px',
      },
      fontFamily: {
        satoshi: ['Satoshi-regular', 'sans-serif'],
        satoshiLight: ['Satoshi-light', 'sans-serif'],
      },
      colors: {
        btnColor: '#424BD0',
        darkTextColor: '#282943',
        primeryColor: '#fff',
        lightColor: 'rgba(40, 41, 67, 0.15)',
        bgLightColor: '#F9F9FF',
        paraLineheight: '130%',
        LightBtnColor: '#424BD033',
      },
    },
  },
  plugins: [],
}
