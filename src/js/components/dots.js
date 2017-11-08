import { randomColor } from '../tools/colors'
import { getRandomInt } from '../tools/utils'
// import { canvasContext } from '../tools/canvas'
import { kill } from './kill'

// DOM container, dots array and dot itself
let container = document.getElementById('container')
// let dot, anima, angle, moveAreaX, moveAreaY, ranX, ranY
// export let dotsArr = []
export let DotsArr = []

// export function createDots(quantity, size, time, scale) {

//   // create element
//   // push to array and DOM
//   dot = document.createElement('i')
//   container.appendChild(dot)
//   dotsArr.push(dot)

//   // random background color
//   dot.style.width = size + 'px'
//   dot.style.height = size + 'px'
//   dot.style.backgroundColor = randomColor()
//   dot.style.scale = 0

//   // movement coordinates
//   angle = getRandomInt(0, 360)
//   moveAreaX = container.offsetWidth
//   moveAreaY = container.offsetHeight

//   // random position on the edge of a circle
//   ranX = moveAreaX * Math.cos(angle * Math.PI / 180)
//   ranY = moveAreaY * Math.sin(angle * Math.PI / 180)

//   // animate to
//   anima = TweenMax.to(dot, time, {
//     x: ranX,
//     y: ranY,
//     // ease: Expo.easeOut,
//     // ease: CustomEase.create('teste', '0, 1, 1, 1'),
//     ease: CustomEase.create('launchEffect', '.07,.85,1,1'),
//     onComplete: kill,
//     force3D: true
//   })
// }

export class Dot {
  constructor(size, time) {
    this.size = size
    this.time = time
    
    const dot = document.createElement('i')
    container.appendChild(dot)

    this.render(dot, size, time)
  }

  render(dot, size, time) {
    console.log('render')
    DotsArr.push(dot)
    console.log(DotsArr)

    dot.style.width = size + 'px'
    dot.style.height = dot.style.width
    dot.style.backgroundColor = randomColor()
    dot.style.scale = 0

    this.anima(container, dot, time)
  }

  // create element
  // push to array and DOM
  // dot = document.createElement('i')
  // container.appendChild(dot)
  // dotsArr.push(dot)

  // random background color
  // dot.style.width = size + 'px'
  // dot.style.height = size + 'px'
  // dot.style.backgroundColor = randomColor()
  // dot.style.scale = 0

  anima(container, dot, time) {
    let angle = getRandomInt(0, 360)
    let ranX = container.offsetWidth * Math.cos(angle * Math.PI / 180)
    let ranY = container.offsetHeight * Math.sin(angle * Math.PI / 180)
    
    TweenMax.to(dot, time, {
      x: ranX,
      y: ranY,
      // ease: Expo.easeOut,
      // ease: CustomEase.create('teste', '0, 1, 1, 1'),
      ease: CustomEase.create('launchEffect', '.07,.85,1,1'),
      // onComplete: kill,
      force3D: true
    })
  }
}
