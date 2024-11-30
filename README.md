# Пример react приложения

## Описаны настройки файлов:

- .eslintrc.json
- .prettierrc
- tsconfig.json
- webpack.config.ts

## Настройки vs code для применения prettier при сохранение

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
}
```
