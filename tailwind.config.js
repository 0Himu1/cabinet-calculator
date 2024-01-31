module.exports = {
  darkMode: "class", // Enable dark mode with class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure paths are correct for your project
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        "custom-blue": "#243c5a",
        "custom-red": "#ff0000",
        "custom-green": "#3f6212",
        // Add other colors as needed
      },
    },
  },
  plugins: [],
};
