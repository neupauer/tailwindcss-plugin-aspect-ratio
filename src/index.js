const plugin = require("tailwindcss/plugin");

const round = (num, precision = 2) =>
  Math.round((num + Number.EPSILON) * 10 ** precision) / 10 ** precision;

module.exports = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const ratios = theme("aspectRatio", {});

    const utilities = [];

    for (const [modifier, ratio] of Object.entries(ratios)) {
      utilities.push({
        // Relative
        [`.${e(`min-aspect-ratio-${modifier}`)}::before`]: {
          content: '""',
          width: "1px",
          marginLeft: "-1px",
          float: "left",
          height: "0",
          paddingBottom: `${round(100 / (ratio || 1), 4)}%`,
        },
        [`.${e(`min-aspect-ratio-${modifier}`)}::after`]: {
          content: '""',
          display: "table",
          clear: "both",
        },

        // Absolute
        [`.${e(`aspect-ratio-${modifier}`)}`]: {
          position: "relative",
        },
        [`.${e(`aspect-ratio-${modifier}`)}::before`]: {
          content: '""',
          display: "block",
          paddingBottom: `${round(100 / (ratio || 1), 4)}%`,
        },
        [`.${e(`aspect-ratio-${modifier}`)} > :first-child`]: {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        },
        [`.${e(`aspect-ratio-${modifier}`)} > :not(:first-child)`]: {
          display: "none",
        },
      });
    }

    addUtilities(utilities, variants("aspectRatio", []));
  },
  {
    theme: {
      aspectRatio: {
        // Square
        "1:1": 1,
        // Landscape
        "2:1": 2 / 1,
        "3:1": 3 / 1,
        "3:2": 3 / 2,
        "4:1": 4 / 1,
        "4:3": 4 / 3,
        "5:4": 5 / 4,
        "16:9": 16 / 9,
        "16:10": 16 / 10,
        "19:10": 19 / 10,
        "21:9": 21 / 9,
        // Portrait
        "1:2": 1 / 2,
        "1:3": 1 / 3,
        "2:3": 2 / 3,
        "1:4": 1 / 4,
        "3:4": 3 / 4,
        "4:5": 4 / 5,
        "9:16": 9 / 16,
        "10:16": 10 / 16,
        "10:19": 10 / 19,
        "9:21": 9 / 21,
      },
    },
    variants: {
      aspectRatio: ["responsive"],
    },
  }
);
