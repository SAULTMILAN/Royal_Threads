export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1B3B",
          charcoal: "#232323",
          ivory: "#FFFAF0",
          gold: "#D4AF37",
          purple: "#4B2E83",
          mist: "#F4F1EA"
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 10px 30px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
