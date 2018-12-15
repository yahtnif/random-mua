# random-mua

[![npm](https://badgen.net/npm/v/random-mua)](https://www.npmjs.com/package/random-mua)
[![install size](https://badgen.net/packagephobia/install/random-mua)](https://packagephobia.now.sh/result?p=random-mua)
[![Build Status](https://travis-ci.org/yahtnif/random-mua.svg?branch=master)](https://travis-ci.org/yahtnif/random-mua)

> Random Modern User-Agent.


## Install

```sh
npm install random-mua
# or
yarn add random-mua
```


## Usage

```js
const randomMua = require('random-mua')

// desktop user agent
console.log(randomMua())
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36

// mobile user agent
console.log(randomMua('mobile'))
// Mozilla/5.0 (Linux; Android 7.0; FRD-L04) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36
```


## More

From [globalstats](https://www.w3counter.com/globalstats.php):

```markdown
Chrome    >    63%
Safari    >    13%
```

Filter in Top 10 Web Browsers:

```markdown
Chrome version >= 59
Safari version >= 11
```

Count:

```markdown
430 (desktop)
326 (mobile)
```


## License

[MIT](http://opensource.org/licenses/MIT)
