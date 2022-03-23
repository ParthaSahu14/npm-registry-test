import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';

import pkg from './package.json';

export default {
  input: ['src/index.ts', 'src/MyTestComponentModule.ts', 'src/DataTableModule.ts', 'src/TableDetailsModule.ts', 'src/RegistrationModule.ts'],
  output: [
    {
      dir: './lib/cjs',
      format: 'cjs',
    },
    {
      dir: './lib/esm',
      format: 'es',
    },
  ],
  external: ['react', 'react-dom', 'styled-component', 'react-data-table-component', 'react-router-dom'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    json({
      compact: true
    }),
    multiInput({ relative: 'src/' })
  ],
};