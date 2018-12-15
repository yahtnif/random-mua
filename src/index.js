import UA from './ua.json'
import UAMobile from './ua.mobile.json'

function randomArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export default function(device) {
  return device ? randomArray(UAMobile) : randomArray(UA)
}
