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
        'vue/attributes-order': ['warn', {
            // 'order': [
            //     'DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS',
            //     'GLOBAL', ['UNIQUE', 'SLOT'],
            //     'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR',
            //     'EVENTS', 'CONTENT',
            // ],
            'alphabetical': true,
        }],
        'vue/html-indent': ['warn', 4],
        'vue/html-self-closing': ['warn', {
            'html': { void: 'always', normal: 'never', component: 'any' },
        }],
        'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 2 }],
        'vue/no-multiple-template-root': ['off'],
    },
};
