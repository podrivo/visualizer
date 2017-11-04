import { randomColor } from '../tools/colors'
import { getRandomInt } from '../tools/utils'
import { context } from '../tools/canvas'
import { killDots } from './kill-dots'

// DOM container, dots array and dot itself
let container = document.getElementById('container')
let dot, anima, angle, moveAreaX, moveAreaY, ranX, ranY
export let dotsArr = []

export function createDots(quantity, size, time, scale) {

  // create element
  // push to array and DOM
  dot = document.createElement('i')
  // container.appendChild(dot)
  // dotsArr.push(dot)

  // random background color
  dot.style.width = size + 'px'
  dot.style.height = size + 'px'
  dot.style.backgroundColor = randomColor()
  dot.style.scale = 0

  // movement coordinates
  angle = getRandomInt(0,360)
  moveAreaX = container.offsetWidth
  moveAreaY = container.offsetHeight

  // random position on the edge of a circle
  ranX = moveAreaX * Math.cos(angle * Math.PI / 180)
  ranY = moveAreaY * Math.sin(angle * Math.PI / 180)

  // animate to
  anima = TweenMax.to(dot, time, {
    x: ranX,
    y: ranY,
    // ease: Expo.easeOut,
    // ease: CustomEase.create('teste', '0, 1, 1, 1'),
    ease: CustomEase.create('launchEffect', '.07,.85,1,1'),
    // onComplete: killDots,
    force3D: true
  })
}
