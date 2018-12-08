module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "rules": {
    "no-tabs": "off",
    "import/no-unresolved": "off",
    "import/namespace": "off",
    "indent": [
      "error",
      "tab",
      {
        "SwitchCase": 1
      }
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
