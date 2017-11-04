import { randomColor } from '../tools/colors'
import { getRandomInt } from '../tools/utils'
import { context } from '../tools/canvas'

export class Circle {
  constructor (x, y, size, color) {
    this.x = x
    this.y = y
    this.size = size
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
    console.log('render rodou')
  }
  
  tween() {
    // movement coordinates
    let angle = getRandomInt(0, 360)
    let ranX = window.innerWidth * Math.cos(angle * Math.PI / 180)
    let ranY = window.innerHeight * Math.sin(angle * Math.PI / 180)
    
    // tween position
    TweenMax.to(this, 2, {
      x: ranX,
      y: ranY,
      // ease: Expo.easeOut,
      // ease: CustomEase.create('teste', '0, 1, 1, 1'),
      // ease: CustomEase.create('launchEffect', '.07,.85,1,1'),
      onUpdate: this.render(context),
      // onComplete: killDots,
      // force3D: true
    })
  }
}