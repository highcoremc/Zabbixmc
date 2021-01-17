// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
    ],
    rules: {
        'vue/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    }
};