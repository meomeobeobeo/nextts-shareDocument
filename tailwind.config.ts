import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme : {
      fontFamily: {
        'poppins':['Poppins','sans-serif']
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        
        white: "white",
        "orchid-purple": "#8854c0",
        "medium-violet-red": "#9a4292",
        "white-smoke": "var(--grey-f3f3f3)",
        "hight-violet-red": "#461a42",
        "lilac-faded": "#ede6f6",
        "steel-blue": "#2d70ae",
        "sea-blue--green": "#2d9da6",
        "qfw-lilac": "#8854c0",
        "black-grey-333333": "#333",
        thistle: "#e1cdde",
        "light-grey": "#d6d6d6",
        "grey-f3f3f3": "#f3f3f3",
        "black-2": "#2a2a2a",
        "lilac--dark": "#6c4298",
        "background--dark-primary": "#090909",
        "bg-blue" : "#86d4e1",
        color: "white",
        "light-yellow" : "#FFEDD5",
        "medium-yellow" : "#CD8401",
        "h-gray" : "#6D6D6D",
        "light-purple" : "#EDE6F6",
        "middle-purple" : "#DAC8EC",
        "light-blue" : "#3192FA",
        "more-light-blue" : "#B1D4FE"
      },
    },
  },
  plugins: [],
};
export default config;
