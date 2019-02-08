# random-mua

[![npm](https://badgen.net/npm/v/random-mua)](https://www.npmjs.com/package/random-mua)
[![install size](https://badgen.net/packagephobia/install/random-mua)](https://packagephobia.now.sh/result?p=random-mua)
[![Build Status](https://travis-ci.org/yahtnif/random-mua.svg?branch=master)](https://travis-ci.org/yahtnif/random-mua)

> Random Modern User-Agent.

## Install

```sh
yarn add random-mua
# or
npm install random-mua
```

## Usage

```js
const randomMua = require('random-mua')

/**
 * desktop user agent
 */
console.log(randomMua())
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36
console.log(randomMua())
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3622.0 Safari/537.36

/**
 * mobile user agent
 */
console.log(randomMua('m'))
// Mozilla/5.0 (Linux; Android 7.0; Redmi Note 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36
console.log(randomMua('mobile'))
// Mozilla/5.0 (Linux; Android 7.0; FRD-L04) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36
```

## More

From [globalstats](https://www.w3counter.com/globalstats.php):

```markdown
Chrome > 63%
Safari > 14%
```

Filter in Top 10 Web Browsers:

```markdown
Chrome version >= 61
Safari version >= 11
```

Count:

```markdown
382 (desktop)
335 (mobile)
```

## License

[MIT](http://opensource.org/licenses/MIT)
