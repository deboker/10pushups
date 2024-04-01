module.exports = {
  content: [
    "./**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        'custom-brown': '#291b1e', // Example custom color
        'custom-peach': '#e19978', // Another custom color
        'text-gray-800': 'rgb(31 41 55)'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'], // Example of extending the default sans-serif font family
      },
      // Add other theme customizations here
    },
  },
  plugins: [],
}
