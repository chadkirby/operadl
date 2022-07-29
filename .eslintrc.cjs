module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
    //   'prefer-const': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },

}
