import clear from 'rollup-plugin-clear'
import filesize from 'rollup-plugin-filesize'
import cleanup from 'rollup-plugin-cleanup'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: ['park-miller'],
  plugins: [
    clear({
      targets: ['dist']
    }),
    json(),
    terser(),
    filesize(),
    cleanup()
  ]
}
