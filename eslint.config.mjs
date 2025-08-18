import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      semi: 'error',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      'no-lonely-if': 'warn',
      'no-unused-vars': 'warn',
      'no-trailing-spaces': 'warn',
      'no-multi-spaces': 'warn',
      'no-multiple-empty-lines': 'warn',
      'space-before-blocks': ['error', 'always'],
      semi: [1, 'never'],
      'linebreak-style': 'off',
      quotes: ['warn', 'single'],
      'array-bracket-spacing': 'warn',
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': 'warn',
      'comma-spacing': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }),
]

export default eslintConfig
