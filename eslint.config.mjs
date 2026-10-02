import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['jest.config.cjs', 'node_modules/', 'coverage/', 'dist/', 'web-build/', '.expo/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
);
