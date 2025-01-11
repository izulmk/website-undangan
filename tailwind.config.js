const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { playfair: ["Playfair Display", "serif"] },
      colors: {
        primaryColor: "#8a2d38",
        secondaryColor: "#517470",
        thirdColor: "#f5f1ed",
      },
      backgroundImage: {
        wrapperBg: "url('assets/images/1.webp')",
        wrapperDark: "url('assets/images/1.webp')",
      },
      screens: {
        // Menambahkan breakpoint khusus jika perlu
        sm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus"],
      ringColor: ["focus"],
    },
  },
  plugins: [],
});
