module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'megenta': "#1a0024",
        'deep-pink': "#f85a90",
        'light-pink': "#cd1bbb"
      },
      backgroundImage: {
        'night-pattern': "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')"
      }
    },
  },
  plugins: [],
}
