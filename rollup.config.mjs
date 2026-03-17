import resolve from '@rollup/plugin-node-resolve';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import svgr from '@svgr/rollup';

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'];

const config = {
  plugins: [
    peerDepsExternal(),
    postcss({
      extensions: ['.css', '.scss'],
      modules: true,
      use: ['sass'],
    }),
    resolve({ extensions }),
    babel({ babelHelpers: 'runtime', exclude: 'node_modules/**', extensions }),
    commonjs({ strictRequires: true }),
    svgr(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
  ],
};

export default [
  {
    input: Object.fromEntries(
      globSync(['src/**/*.{ts,js,tsx,jsx}'], {
        ignore: ['**/*.{test,stories}.{ts,tsx,js,jsx}'],
      }).map((file) => [
        path.relative('src', file.slice(0, file.length - path.extname(file).length)),
        fileURLToPath(new URL(file, import.meta.url)),
      ]),
    ),
    output: {
      format: 'es',
      dir: './build',
      chunkFileNames: 'chunks/[name]-[hash].js',
    },
    ...config,
  },
];
