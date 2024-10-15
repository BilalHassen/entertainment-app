module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FC4747", // Red from design system
        darkBlue: "#10141E", // Dark blue from design system
        greyishBlue: "#5A698F", // Greyish blue
        semiDarkBlue: "#161D2F", // Semi dark blue
        white: "#FFFFFF", // Pure white
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Outfit font used in typography
      },
      fontSize: {
        "heading-l": ["32px", "auto"], // Heading Large
        "heading-m": ["24px", "auto"], // Heading Medium
        "heading-s": ["24px", "auto"], // Heading Small
        "heading-xs": ["18px", "auto"], // Heading Extra Small
        "body-m": ["15px", "auto"], // Body Medium
        "body-s": ["13px", "auto"], // Body Small
      },
    },
  },
  plugins: [],
};
