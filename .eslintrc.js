module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        'comma-dangle': ['warn', 'always-multiline'],
        'indent': ['warn', 4, { MemberExpression: 1, SwitchCase: 1 }],
        'no-console': ['error', { allow: ['debug', 'log', 'warn', 'error'] }],
        'no-unused-vars': 'off',
        'quote-props': ['warn', 'as-needed', { unnecessary: false }],
        'semi': [2, 'always'],
        'vue/html-indent': ['warn', 4],
        'vue/no-multiple-template-root': ['off'],
    },
};
