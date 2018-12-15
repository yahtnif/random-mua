const fs = require('fs')
const { gunzipSync } = require('zlib')

const files = ['ua.json', 'ua.mobile.json']

for (let file of files) {
  let filename = `src/${file}`
  const compressedData = fs.readFileSync(filename + '.gz')
  const data = gunzipSync(compressedData)
  fs.writeFileSync(filename, data)
}
