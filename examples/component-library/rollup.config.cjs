// const babel = require('@rollup/plugin-babel');
// const typescript = require('rollup-plugin-typescript2');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const replaceImportsWithVars = require('rollup-plugin-replace-imports-with-vars');
const json = require('@rollup/plugin-json');
const copy = require('rollup-plugin-copy');
// const { terser } = require('rollup-plugin-terser');
const replace = require('@rollup/plugin-replace');
const path = require('path');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'craftercms.libs.React',
  rxjs: 'craftercms.libs.rxjs',
  'rxjs/operators': 'craftercms.libs.rxjs',
  // jsx runtime part of Studio's runtime starting 4.1.2
  'react/jsx-runtime': 'craftercms.libs?.reactJsxRuntime',
  '@emotion/css/create-instance': 'craftercms.libs.createEmotion',
  'react-dom': 'craftercms.libs.ReactDOM',
  'react-intl': 'craftercms.libs.ReactIntl',
  'react-redux': 'craftercms.libs.ReactRedux',
  '@mui/material': 'craftercms.libs.MaterialUI',
  '@craftercms/studio-ui': 'craftercms.components',
  '@craftercms/studio-ui/components': 'craftercms.components',
  '@mui/material/utils': 'craftercms.libs.MaterialUI',
  '@reduxjs/toolkit': 'craftercms.libs.ReduxToolkit'
};

const replacementRegExps = {
  '@craftercms/studio-ui/(components|icons|utils|services)/(.+)': (exec) =>
    `craftercms.${exec[1]}.${exec[2].split('/').pop()}`,
  '@mui/material/(.+)': (exec) => `craftercms.libs.MaterialUI.${exec[1]}`,
  '@mui/icons-material/(.+(Rounded|Outlined))$': (exec) => `craftercms.utils.constants.components.get('${exec[0]}')`
};

const authoringPluginsRoot = path.resolve(__dirname, '../../authoring/static-assets/plugins/org/craftercms/examples');

function createConfig({ input, file, copyDest }) {
  return {
    context: 'this',
    input,
    output: [
      {
        file,
        format: 'es',
        globals
      }
    ],
    external: Object.keys(globals).concat(Object.keys(replacementRegExps).map((str) => new RegExp(str))),
    plugins: [
      json(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
        'import.meta.env.MODE': JSON.stringify('production')
      }),
      typescript({ tsconfig: './tsconfig.json', compilerOptions: { noEmit: false } }),
      replaceImportsWithVars({
        replacementLookup: globals,
        replacementRegExps
      }),
      // !!: If used, terser should be after `replaceImportsWithVars`
      // terser(),
      resolve({ extensions }),
      commonjs(),
      copy({
        hook: 'closeBundle',
        targets: [
          {
            src: file,
            dest: copyDest
          }
        ]
      })
    ]
  };
}

module.exports = [
  createConfig({
    input: 'src/index.tsx',
    file: 'dist/index.js',
    copyDest: path.join(authoringPluginsRoot, 'library')
  }),
  createConfig({
    input: 'src/controls/apodControlPlugin.ts',
    file: 'dist/control/apod/index.js',
    copyDest: path.join(authoringPluginsRoot, 'control/apod')
  }),
  createConfig({
    input: 'src/dataSources/apodImagePlugin.ts',
    file: 'dist/datasource/apod-image/index.js',
    copyDest: path.join(authoringPluginsRoot, 'datasource/apod-image')
  })
];
