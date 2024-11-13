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
          50: "var(--clr-error-50)",
          60: "var(--clr-error-60)",
          70: "var(--clr-error-70)",
          80: "var(--clr-error-80)",
          90: "var(--clr-error-90)",
          100: "var(--clr-error-100)",
        },
        warning: {
          10: "var(--clr-warning-10)",
          20: "var(--clr-warning-20)",
          30: "var(--clr-warning-30)",
          40: "var(--clr-warning-40)",
          50: "var(--clr-warning-50)",
        },
        info: {
          10: "var(--clr-info-10)",
          20: "var(--clr-info-20)",
          30: "var(--clr-info-30)",
          40: "var(--clr-info-40)",
          50: "var(--clr-info-50)",
        },
        success: {
          10: "var(--clr-success-10)",
          20: "var(--clr-success-20)",
          30: "var(--clr-success-30)",
          40: "var(--clr-success-40)",
          50: "var(--clr-success-50)",
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
