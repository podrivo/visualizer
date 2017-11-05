import { randomColor } from '../tools/colors'
import { getRandomInt } from '../tools/utils'
import { context } from '../tools/canvas'

let canvas = document.getElementById('canvas')

export let CircleArr = []

export class Circle {
  constructor (x, y, size, time, color) {
    this.x = x
    this.y = y
    this.size = size
    this.time = time
    this.color = color
    
    this.render(context)
    this.tween()
  }

  render(context) {
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    context.closePath()

    context.fillStyle = this.color
    context.fill()
  }
  
  tween() {
    // movement coordinates
    // (canvas size * random circular edge) + centering
    let angle = getRandomInt(0, 360)
    let randomX = ((canvas.offsetWidth / 1) * Math.cos(angle * Math.PI / 180)) + window.innerWidth / 2
    let randomY = ((canvas.offsetHeight / 1) * Math.sin(angle * Math.PI / 180)) + window.innerHeight / 2
    
    // tween position
    TweenMax.to(this, time, {
      x: randomX,
      y: randomY,
      // ease: Expo.easeOut,
      // ease: CustomEase.create('teste', '0, 1, 1, 1'),
      ease: CustomEase.create('launchEffect', '.07,.85,1,1'),
      onUpdate: () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        CircleArr.forEach((circle) => {
          circle.update(context)
        })
      },
      onComplete: () => {this.kill()}
    })
  }
  
  update(context) {
    this.render(context)
  }

  kill() {
    let c = CircleArr.indexOf(this)
    CircleArr.splice(c, 1)
  }
}