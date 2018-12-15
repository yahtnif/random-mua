# random-mua

> Random Modern User-Agent.


## Install

```sh
npm install random-mua
# or
yarn add random-mua
```


## Usage

```js
const RandomMua = require('random-mua')

// desktop user agent
console.log(RandomMua())
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36

// mobile user agent
console.log(RandomMua('mobile'))
// Mozilla/5.0 (Linux; Android 7.0; FRD-L04) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36
```


## More

From `http://gs.statcounter.com/browser-version-market-share`:

```markdown
Chrome for Android    >    30%
Chrome 70.0           >    25%
Safari iPhone         >    9%
Safari iPad           >    2%
```

Filter:

```markdown
Chrome: version >= 70 // 2018-10-16
Safari: version >= 12 // 2018-09-17
]
```


## License

[MIT](http://opensource.org/licenses/MIT)