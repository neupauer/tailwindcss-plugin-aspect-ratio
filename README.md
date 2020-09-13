# Tailwind CSS Plugin – Aspect Ratio

## Install

1. Configuring your registry settings

Add `.npmrc` to have `@neupauer:registry=https://npm.pkg.github.com`:

```bash
echo '@neupauer:registry=https://npm.pkg.github.com' >> .npmrc
```

2. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-aspect-ratio --save-dev

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-aspect-ratio -D
```

3. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-aspect-ratio")],
};
```

## Configuration

By default, some common aspect ratios are provided, but you can override or expand them with `aspectRatio` key in your `tailwind.config.js` file.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // default
    aspectRatio: {
      "1/1": 1 / 1,
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
    // default
    aspectRatio: ["responsive"],
  },
};
```
