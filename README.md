# react hello world

```bash
npm init -y
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader @svgr/webpack file-loader style-loader css-loader ts-node html-webpack-plugin
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
```

## Editor Settings in JSON

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
}
```
