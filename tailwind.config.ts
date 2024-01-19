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
          50: '#e8ecef',
          100: '#b7c3cd',
          200: '#94a7b5',
          300: '#647e94',
          400: '#45657f',
          500: '#173f5f', // main
          600: '#153956',
          700: '#102d43',
          800: '#0d2334',
          900: '#0a1a28',
          contrast: 'white',
        },
        secondary: {
          50: '#FAEFEF',
          100: '#f9cac2',
          200: '#f7b1a5',
          300: '#f38d7c',
          400: '#f17762',
          500: '#ed553b', // main
          600: '#d84d36',
          700: '#a83c2a',
          800: '#822f20',
          900: '#642419',
          contrast: 'white',
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

        lightBlue: {
          50: '#F7FCFC',
          100: '#f0f8ff',
        },
      },
    },
  },
  plugins: [],
}
export default config
