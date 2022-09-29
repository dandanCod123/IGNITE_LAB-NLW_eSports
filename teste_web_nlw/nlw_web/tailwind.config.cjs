/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage:{
        fundo:"url('/home/daniel-moura/Documentos/React_Native_NLW(ROCKESEAT)/nlw_eSports/teste_web_nlw/nlw_web/src/assets/Fundo (1).png')",
        'nlw-gradient':'linear-gradient(90.86deg, #9572FC 10.08%, #43E7AD 30.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },

    },
  },
  plugins: [],
}
