import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import { eslint } from 'rollup-plugin-eslint'
import minify from 'rollup-plugin-babel-minify'

const IS_PRO = process.env.NODE_ENV === 'production'

export default {
  input: './src/core/index.ts',
  plugins: [
    babel(),
    alias({
      resolve: ['.ts']
    }),
    eslint({
      include: ['src/**/*.ts']
    }),
    typescript(),
    commonjs(),
    resolve(),
    IS_PRO && minify({ comments: false })
  ],
  output: [
    {
      file: 'dist/moto.min.js',
      format: 'umd',
      name: 'moto',
      sourcemap: true
    }
  ]
}
