import { Random } from 'suni'
import UA from './ua.json'
import UAMobile from './ua.mobile.json'

const RANDOM_MAX = UA.length - 1
const RANDOM_MOBILE_MAX = UAMobile.length - 1
const random = new Random({ unique: true })

function isMobile(device) {
  return device === 'm' || device === 'mobile'
}

function getRandomUA(device) {
  return isMobile(device)
    ? UAMobile[random.int(0, RANDOM_MOBILE_MAX)]
    : UA[random.int(0, RANDOM_MAX)]
}

export default function(device) {
  return getRandomUA(device)
}
