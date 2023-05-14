/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        kanit: ['var(--font-kanit)'],
        anton: ['var(--font-anton)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
