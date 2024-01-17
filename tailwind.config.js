/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headertop: 'url("../headerTop.png")',
        homeslider: 'url("../homeSlider.png")',
        homeAbout: 'url("../homeAbout.png")',
        swiperBg2: 'url("../swiperBg2.png")',
        servicesBg: 'url("../servicesBg.png")',
        thirdSwiper: 'url("../thirdSwiper.png")',
        questionBg: 'url("../questionBg.png")',
        footerBg: 'url("../footerBg.png")',
      
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
