/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        quicksand: ['"Quicksand"', 'sans-serif'],
      },
      animation: {
        slide: 'slide 10s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
       }
    },
  },
  plugins: [],
}

