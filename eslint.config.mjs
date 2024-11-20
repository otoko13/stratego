// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    semi: "error",
    "prefer-const": "error",
    "comma-dangle": ["error", "always-multiline"],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 1,
      },
    ],
    "vue/multi-word-component-names": "off",
  },
});
