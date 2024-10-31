module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'custom-container': '80rem',
      },
      colors: {
        primary: {
          10: '#E1F5FE',
          20: '#B3E5FC',
          30: '#81D4FA',
          40: '#4FC3F7',
          50: '#29B6F6',
          60: '#03A9F4',
          70: '#039BE5',
          80: '#0288D1',
          90: '#0277BD',
          100: '#01579B',
        },
        secondary: {
          10: 'var(--clr-secondary-10)',
          20: 'var(--clr-secondary-20)',
          30: 'var(--clr-secondary-30)',
          40: 'var(--clr-secondary-40)',
          50: 'var(--clr-secondary-50)',
          60: 'var(--clr-secondary-60)',
          70: 'var(--clr-secondary-70)',
          80: 'var(--clr-secondary-80)',
          90: 'var(--clr-secondary-90)',
          100: 'var(--clr-secondary-100)',
        },
        neutral: {
          10: 'var(--clr-neutral-10)',
          20: 'var(--clr-neutral-20)',
          30: 'var(--clr-neutral-30)',
          40: 'var(--clr-neutral-40)',
          50: 'var(--clr-neutral-50)',
          60: 'var(--clr-neutral-60)',
          70: 'var(--clr-neutral-70)',
          80: 'var(--clr-neutral-80)',
          90: 'var(--clr-neutral-90)',
          100: 'var(--clr-neutral-100)',
        },
        error: {
          10: 'var(--clr-error-10)',
          20: 'var(--clr-error-20)',
          30: 'var(--clr-error-30)',
          40: 'var(--clr-error-40)',
          50: 'var(--clr-error-50)',
          60: 'var(--clr-error-60)',
          70: 'var(--clr-error-70)',
          80: 'var(--clr-error-80)',
          90: 'var(--clr-error-90)',
          100: 'var(--clr-error-100)',
        },
        warning: {
          10: 'var(--clr-warning-10)',
          20: 'var(--clr-warning-20)',
          30: 'var(--clr-warning-30)',
          40: 'var(--clr-warning-40)',
          50: 'var(--clr-warning-50)',
        },
        info: {
          10: 'var(--clr-info-10)',
          20: 'var(--clr-info-20)',
          30: 'var(--clr-info-30)',
          40: 'var(--clr-info-40)',
          50: 'var(--clr-info-50)',
        },
        success: {
          10: 'var(--clr-success-10)',
          20: 'var(--clr-success-20)',
          30: 'var(--clr-success-30)',
          40: 'var(--clr-success-40)',
          50: 'var(--clr-success-50)',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const colors = theme('colors');
      const newUtilities = {};

      const properties = [
        { property: 'backgroundColor', prefix: 'bg' },
        { property: 'borderColor', prefix: 'border' },
        { property: 'color', prefix: 'text' },
        { property: 'fill', prefix: 'fill' },
        { property: 'outlineColor', prefix: 'outline' },
      ];

      Object.entries(colors).forEach(([colorKey, colorValue]) => {
        if (typeof colorValue === 'object') {
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

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};