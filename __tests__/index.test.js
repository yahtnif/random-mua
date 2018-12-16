const randomMua = require('../dist')

const TIMES = 1000

describe('random-mua', () => {
  it('desktop', () => {
    for (let i = 0; i < TIMES; i++) {
      expect(randomMua()).not.toMatch(/mobile/i)
    }
  })

  it('m', () => {
    for (let i = 0; i < TIMES; i++) {
      expect(randomMua('m')).toMatch(/mobile/i)
    }
  })

  it('mobile', () => {
    for (let i = 0; i < TIMES; i++) {
      expect(randomMua('mobile')).toMatch(/mobile/i)
    }
  })

  it('unique', () => {
    let prev = randomMua()
    let next
    for (let i = 0; i < TIMES * 10; i++) {
      next = randomMua()
      expect(prev).not.toEqual(next)
      prev = next
    }
  })
})
