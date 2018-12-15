const randomMua = require('../dist')

it('random-mua', () => {
  expect(randomMua()).toBeDefined()
  expect(randomMua('mobile')).toMatch(/mobile/i)
})