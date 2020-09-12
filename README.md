# Tailwind CSS Plugin Aspect Ratio

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
