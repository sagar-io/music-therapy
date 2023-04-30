/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      cursor: {
        'emojiCursor': 'url(assets/cursor.png)_3_3, pointer'
      }
    },
    fontFamily: {
      'body': 'PT Serif, serif',
      'arial': 'Arial, Helvetica, sans-serif',
      'comfotaa': 'Comfortaa, cursive'
    },
    backgroundSize: {
        50: '50%'
    }
  },
  plugins: [],
}

