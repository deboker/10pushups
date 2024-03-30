module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // Adjust this path based on where your files are located
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        'custom-brown': '#291b1e', // Example custom color
        'custom-peach': '#e19978', // Another custom color
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'], // Example of extending the default sans-serif font family
      },
      // Add other theme customizations here
    },
  },
  plugins: [],
}
