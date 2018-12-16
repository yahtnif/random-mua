import ParkMiller from 'park-miller'
import UA from './ua.json'
import UAMobile from './ua.mobile.json'

const RANDOM_MAX = UA.length - 1
const RANDOM_MOBILE_MAX = UAMobile.length - 1
const random = new ParkMiller(Math.floor(Math.random() * 100))
let prev

function isMobile(device) {
  return device === 'm' || device === 'mobile'
}

function getRandomUA(device) {
  let ua = isMobile(device) ? UAMobile[random.integerInRange(0, RANDOM_MOBILE_MAX)] : UA[random.integerInRange(0, RANDOM_MAX)]
  return prev = (prev === ua) ? getRandomUA(device) : ua
}

export default function(device) {
  return getRandomUA(device)
}
