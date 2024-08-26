/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        blue: {
          deepBlue: "#02042B",
        },
      },
      backgroundImage: {
        "feature-sectuion": "url('/image/feature-section-2BG.svg')",
        "2features": "url('/image/instant-settlement-bg.svg')",
        "3features": "url('/image/instant-settlement-bghover.svg')",
        "core-feture": "url('/image/core-features-sectionBg.svg')",
        "core-support": "url('/image/CTABg.svg')",
      },
    },
  },
  plugins: [],
};
