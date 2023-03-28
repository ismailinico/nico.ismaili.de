module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./sections/**/*.tsx",
    "./utils/**/*.tsx",
  ],
  safelist: ["text-primary", "text-primary_dark"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#006AFF",
      primary_dark: "#218CFF",
      light: "#fcfcfc",
      white: "#ffffff",
      danger: "#FF4000",
      danger_dark: "#FF481F",
      dark: "#262626",
      darker: "#1C1C1C",
      warning: "FFEA00",
      warning_dark: "#FFDD1F",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif "],
    },
    dropShadow: {
      "skill-circle": [
        "0 10px 8px rgb(0 0 0 / 0.03)",
        "0 4px 3px rgb(0 0 0 / 0.05)",
      ],
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
