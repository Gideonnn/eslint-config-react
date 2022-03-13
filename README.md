# Gideonnn's eslint config

My personal React eslint setup for React projects. Feel free to use it any way you like.

## Installation

```
yarn add -D @gideonnn/eslint-config-react
```

Install required `peerDependencies`:

```
yarn add -D eslint eslint-config-prettier eslint-config-standard-react eslint-plugin-import eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Import in `package.json`:

```
"eslintConfig": {
  "extends": "@gideonnn/eslint-config-react"
},
```

Add lint commands to your `package.json`:

```
"lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
"lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'"
```

## Enable fix on save

Add the following to your `.vscode/settings.json` file:

```
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
```

## Extend config

Instead of using `package.json`, you can also import this config in your `.eslintrc.js` file. Here you can add or override rules as follows:

```
module.exports = {
  extends: "@gideonnn/eslint-config-react",
  rules: {
    "simple-import-sort/exports": "off",
  },
};
```
