// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    semi: "error",
    "prefer-const": "error",
    "comma-dangle": "error",
  },
});
// Your custom configs here
