import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx}', // Optional: if using pages dir
    './components/**/*.{js,ts,jsx,tsx}', // Optional: if using components dir
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        anton: ['var(--font-anton)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;