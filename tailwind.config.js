/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/TailwindStyles/*.tsx",
    "./src/components/Option3/*.tsx"
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "900px",
      lg: "1200px",
      xl: "1600px",
      maxSm: { max: "639px" },
      maxMd: { max: "899px" },
      btwSmMd: { min: "640px", max: "899px" }
    },
    fontFamily: {
      cinzel: [
        "Cinzel",
        "Goudy Old Style",
        "Garamond",
        "Big Caslon",
        "Times New Roman",
        "serif"
      ],
      cinzeldeco: [
        "Cinzel Decorative",
        "Goudy Old Style",
        "Garamond",
        "Big Caslon",
        "Times New Roman",
        "serif"
      ]
    },
    fontSize: {
      "step--1": "var(--step--1)",
      "step-0": "var(--step-0)",
      "step-1": "var(--step-1)",
      "step-2": "var(--step-2)",
      "step-3": "var(--step-3)",
      "step-4": "var(--step-4)",
      "step-5": "var(--step-5)"
    },
    textShadow: {
      heading: "0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.75)"
    },
    extend: {}
  },
  plugins: [],
  prefix: "tw-"
};
