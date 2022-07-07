module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        'comma-dangle': ['warn', 'always-multiline'],
        'indent': ['warn',
            4, { MemberExpression: 1, SwitchCase: 1 },
        ],
        'no-console': ['error',
            { allow: ['debug', 'log', 'warn', 'error'] },
        ],
        'quote-props': ['warn',
            'as-needed', { unnecessary: false },
        ],
        'semi': [2, 'always'],
        'vue/html-indent': ['warn', 4],
        'vue/html-self-closing': ['warn', {
            'html': { void: 'always', normal: 'never', component: 'any' },
        }],
        'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 2 }],
        'vue/no-multiple-template-root': ['off'],
        'vue/singleline-html-element-content-newline': ['error', {
            'ignoreWhenNoAttributes': true,
            'ignoreWhenEmpty': true,
            'ignores': ['AnnoText', 'button', 'pre', 'textarea'],
        }],
    },
};
