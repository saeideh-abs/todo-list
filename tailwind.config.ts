import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        header: '70px',
      },
      margin: {
        header: '70px',
      },
      boxShadow: {
        header: '0px 3px 15px 3px rgba(34,34,34,0.10)',
      },
      colors: {
        primary: {
          500: '#FFC453',
          contrast: '#000',
        },
        secondary: {
          500: '#000000',
          contrast: '#fff',
        },
        annotation: {
          error: '#E61F10',
          success: '#34A862',
        },
        saGray: {
          500: '#757575',
          300: '#B4B4B4',
          200: '#C2C2C2',
          100: '#E0E0E0',
        },
        common: {
          black: '#222222',
        },
      },
    },
  },
  plugins: [],
}
export default config
