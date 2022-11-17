/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'telaP': "url('../../assets/tela1.png')",
      'TelaS': "url('./src/assets/tela2.png')",
      'logo': "url('./src/assets/logo.png')",
    },
    colors: {
      'cinza': {
        100: '#692ABF',
        200: '#4B4B4B',
        300: '#595959',
        400: '#949494',
        500: '#B1B1B1',
        600: '#BFBBBC',
        700: '#C6C6C6',
        800: '#D9D9D9',
        900: '#E9E9E9',
        950: '#969696',
      },
      'preto': {
        100: '#000000',
        200: '#1A1A1A',
      },
      'branco': {
        100: '#FFFFFF',
        200: '#F5F5F5',
        300: '#E0E0E0',
      },
      'laranja': {
        100: '#F24405',
        200: '#B998FF',
        300: '#FABEA7',
        400: '#996BFB',
      },
    },
  },
  plugins: [],
}