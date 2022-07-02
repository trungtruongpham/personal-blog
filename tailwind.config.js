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
        'deep-blue': "#51557E",
        'light-pink': "#cd1bbb",
        'shade-tint': "#31143e",
        'purple': "#816797"
      },
      backgroundImage: {
        'night-pattern': "url('https://images.unsplash.com/photo-1655025510212-e5e150aa0a61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
      }
    },
  },
  plugins: [],
}
