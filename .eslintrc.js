module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-debugger': "error",
        'no-console': "error",
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error"
    }
};
