const plugin = require("tailwindcss/plugin");
const map = require("lodash/map");
const round = require("lodash/round");

module.exports = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const ratios = theme("aspectRatio", {});

    const utilities = map(ratios, (ratio, modifier) => ({
      [`.${e(`aspect-ratio-${modifier}`)}`]: {
        paddingBottom: `${round(100 / (ratio || 1), 4)}%`,
      },
    }));

    addUtilities(utilities, variants("aspectRatio", []));
  },
  {
    theme: {
      aspectRatio: {
        "1/1": 1,
        "2/1": 2 / 1,
        "3/1": 3 / 1,
        "3/2": 3 / 2,
        "4/1": 4 / 1,
        "4/3": 4 / 3,
        "5/4": 5 / 4,
        "16/9": 16 / 9,
        "16/10": 16 / 10,
        "19/10": 19 / 10,
        "21/9": 21 / 9,
      },
    },
    variants: {
      aspectRatio: ["responsive"],
    },
  }
);
