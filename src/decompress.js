const gunzip = require('gunzip-file')

const files = ['ua.json', 'ua.mobile.json']

for (let file of files) {
  gunzip(`src/${file}.gz`, `src/${file}`, () => {
    console.log('Decompressed:', file)
  })
}
