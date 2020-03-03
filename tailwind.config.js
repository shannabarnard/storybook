// tailwind.config.js
module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      display: ["Varela Round", "sans-serif"],
      body: ["Open Sans", "sans-serif"]
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    extend: {
      colors: {
        primary: {
          "100": "#CCDEFF",
          "200": "#99BDFF",
          "300": "#669CFF",
          "400": "#337CFF",
          "500": "#005BFF",
          "600": "#0049CC",
          // HTX Blue (700)
          "700": "#003087",
          "800": "#002466",
          "900": "#001233"
        },
        secondary: {
          "100": "#DCF3D8",
          "200": "#B8E6B2",
          "300": "#95DA8B",
          "400": "#71CE64",
          "500": "#4EC23D",
          // HTX Green (600)
          "600": "#43A735",
          "700": "#2F7425",
          "800": "#1F4D19",
          "900": "#10270C"
        }
      },
      spacing: {
        "96": "24rem",
        "128": "32rem"
      }
    }
  },
  variants: {}
};
