import { uglify } from 'rollup-plugin-uglify'
import clear from 'rollup-plugin-clear'
import filesize from 'rollup-plugin-filesize'
import cleanup from 'rollup-plugin-cleanup'
import json from 'rollup-plugin-json'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    clear({
      targets: ['dist']
    }),
    json(),
    uglify(),
    filesize(),
    cleanup()
  ]
}