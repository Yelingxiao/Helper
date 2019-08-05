import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import { eslint } from 'rollup-plugin-eslint'
import minify from 'rollup-plugin-babel-minify'
import livereload from 'rollup-plugin-livereload'

const IS_PRO = process.env.NODE_ENV === 'production'

export default {
  input: './src/core/index.ts',
  plugins: [
    eslint({
      include: ['src/**/*.ts']
    }),
    babel({
      extensions: ['.ts', '.js'],
      include: ['src/**']
    }),
    alias({
      resolve: ['.ts']
    }),
    typescript(),
    commonjs(),
    resolve(),
    IS_PRO ? minify({ comments: false }) : livereload()
  ],
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'main'
      // sourcemap: true
    }
  ]
}
