import ParkMiller from 'park-miller'
import UA from './ua.json'
import UAMobile from './ua.mobile.json'

const RANDOM_MAX = UA.length - 1
const RANDOM_MOBILE_MAX = UAMobile.length - 1
const random = new ParkMiller(Math.floor(Math.random() * 100))

export default function(device) {
  return device === 'mobile' ? UAMobile[random.integerInRange(0, RANDOM_MOBILE_MAX)] : UA[random.integerInRange(0, RANDOM_MAX)]
}
