module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        // 'no-underscore-dangle': 0,
        // 'no-param-reassign': 0,
        // 'import/no-unresolved': 'off',
        // 'global-require': 0,
        'no-console': 0,
    },
};
