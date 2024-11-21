module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "custom-container": "80rem",
      },
      colors: {
        primary: {
          10: "#E1F5FE",
          20: "#B3E5FC",
          30: "#81D4FA",
          40: "#4FC3F7",
          50: "#29B6F6",
          60: "#03A9F4",
          70: "#039BE5",
          80: "#0288D1",
          90: "#0277BD",
          100: "#01579B",
        },
        secondary: {
          10: "#FFF3E0",
          20: "#FFE0B2",
          30: "#FFCC80",
          40: "#FFB74D",
          50: "#FFA726",
          60: "v#FF9800",
          70: "#FF9800",
          80: "#F57C00",
          90: "#EF6C00",
          100: "#E65100",
        },
        neutral: {
          10: "#FFFFFF",
          20: "#F5F5F5",
          30: "#EEEEEE",
          40: "#E0E0E0",
          50: "#BDBDBD",
          60: "#9E9E9E",
          70: "#757575",
          80: "#616161",
          90: "#424242",
          100: "#000000",
        },
        error: {
          10: "#FFEBEE",
          20: "#FFCDD2",
          30: "#EF9A9A",
          40: "#E57373",
          50: "#EF5350",
          60: "#F44336",
          70: "#E53935",
          80: "#D32F2F",
          90: "#C62828",
          100: "#B71C1C",
        },
        warning: {
          10: "#FF5722",
          20: "#F4511E",
          30: "#E64A19",
          40: "#D84315",
          50: "#BF360C",
        },
        info: {
          10: "#B3E5FC",
          20: "#4FC3F7",
          30: "#03A9F4",
          40: "#0288D1",
          50: "#01579B",
        },
        success: {
          10: "#C8E6C9",
          20: "#81C784",
          30: "#4CAF50",
          40: "#388E3C",
          50: "#1B5E20",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const colors = theme("colors");
      const newUtilities = {};

      const properties = [
        { property: "backgroundColor", prefix: "bg" },
        { property: "borderColor", prefix: "border" },
        { property: "color", prefix: "text" },
        { property: "fill", prefix: "fill" },
        { property: "outlineColor", prefix: "outline" },
      ];

      Object.entries(colors).forEach(([colorKey, colorValue]) => {
        if (typeof colorValue === "object") {
          Object.entries(colorValue).forEach(([shade, shadeValue]) => {
            properties.forEach(({ property, prefix }) => {
              newUtilities[`.${prefix}-${e(colorKey)}-${e(shade)}`] = {
                [property]: shadeValue,
              };
            });
          });
        } else {
          properties.forEach(({ property, prefix }) => {
            newUtilities[`.${prefix}-${e(colorKey)}`] = {
              [property]: colorValue,
            };
          });
        }
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
