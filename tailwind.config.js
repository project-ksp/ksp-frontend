/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#023894",
      secondary: "#8DBEF8",
      highlighter: "#FF7300",
      "green-status-1": "#44AB4E",
      "green-status-2": "#80E08A",
      "yellow-status-1": "#FEC725",
      "yellow-status-2": "#FFD966",
      "red-status-1": "#FF1205",
      "red-status-2": "#FFB6B2",
    },
    fontSize: {
      xs: ["8px"],
      sm: ["12px"],
      base: ["16px"],
      lg: ["20px"],
      xl: ["26px"],
      "2xl": ["32px"],
      "title-regular": ["36px"],
      "title-medium": ["40px"],
      "title-large": ["48px"],
      "title-xlarge": ["56px"],
    },
  },
  plugins: [],
};
