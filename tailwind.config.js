/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#F7F8FA',
        'secondary': '#E5EAEF',
        'body': '#FAFAFA',
        'primary-green': '#34CAA5'
    },
    fontFamily: {
      'plusSans': ['Plus Jakarta Sans', 'Sans'],
      'inter': ['Inter', 'Sans']
    }
  },
  plugins: []
}
}