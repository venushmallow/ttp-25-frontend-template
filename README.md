# TTP Frontend Template

This is a project repository containing React + Typescript + Vite + React-bootstrap template.

First, make sure you have installed Node.js, preferrably version 20 above. Can check whether node has been installed by running the command:

```cmd
node --version
```
If you have not installed Node.js, please install it [here](https://nodejs.org/en/download/).

Second, for our package manager, we are using npm. Make sure that npm version is the latest by running:

```cmd
npm install -g npm
```

Third, install all packages required for this project to run:

```cmd
npm install
```

And run the project:

```cmd
npm run dev
```
Your project should be running on `localhost:3000`.

## Project Initialization

Steps to initialize this project from scratch:

```cmd
npm create vite@latest my-react-app --template react-ts # Create React project which includes Vite and Typescript support
npm install # Install dependencies
npm install react-bootstrap # Install react-bootstrap library
```

## Useful Links

React-Bootstrap library: https://react-bootstrap.netlify.app/docs/getting-started/introduction

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
