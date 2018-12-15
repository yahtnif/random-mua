const randomMua = require('../dist')

const TIMES = 100

describe('random-mua', () => {
  it('desktop', () => {
    for(let i=0; i< TIMES; i++) {
      expect(randomMua()).not.toMatch(/mobile/i)
    }
  })

  it('mobile', () => {
    for(let i=0; i< TIMES; i++) {
      expect(randomMua('mobile')).toMatch(/mobile/i)
    }
  })

  // it('unique', () => {
  //   let prev = randomMua()
  //   let next
  //   for(let i=0; i< 50; i++) {
  //     next = randomMua()
  //     console.log(i, prev, next)
  //     expect(i + prev).not.toEqual(i + next)
  //   }
  // })
})