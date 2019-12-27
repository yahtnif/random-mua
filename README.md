<div align="center">
	<div>
		<img width="300" src="https://github.com/yahtnif/static/raw/master/logo/random-mua.svg?sanitize=true" alt="random-mua">
	</div>
</div>

[![npm](https://badgen.net/npm/v/random-mua)](https://www.npmjs.com/package/random-mua)
[![gzip size](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/random-mua/dist/index.js?compression=gzip)](https://cdn.jsdelivr.net/npm/random-mua/dist/index.js)
[![install size](https://badgen.net/packagephobia/install/random-mua)](https://packagephobia.now.sh/result?p=random-mua)
[![Build Status](https://travis-ci.org/yahtnif/random-mua.svg?branch=master)](https://travis-ci.org/yahtnif/random-mua)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

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

From [Browser Market Share Worldwide](https://gs.statcounter.com/browser-market-share):

```markdown
Chrome > 64%
Safari > 16%
```

From [Browser Version Market Share Worldwide](https://gs.statcounter.com/browser-version-market-share) and [Top 10 Web Browsers](https://www.w3counter.com/globalstats.php):

```markdown
Chrome version >= 70
Safari version >= 12
```

Count:

```markdown
226 (desktop)
296 (mobile)
```

## License

[Anti 996](./LICENSE)
