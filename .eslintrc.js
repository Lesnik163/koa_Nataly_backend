module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        // Перезаписать правила, указанные в расширенных конфигах, например:
        // "@typescript-eslint/explicit-function-return-type": "off",
        "no-unused-expressions": "warn",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-console": [1, { "allow": ["error"] }]
    },
};