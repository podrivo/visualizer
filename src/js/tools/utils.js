// container element
export const container = document.getElementById('container')

// random integer number
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns an average number
export function getAverageNumber(e) {
  var values = 0
  var length = e.length

  for (var i = 0; i < length; i++) {
    values += e[i]
  }

  return (values / length)
}

// randomize an array's elements
export function randomArrElements(e) {
  return e[Math.floor(Math.random() * e.length)]
}