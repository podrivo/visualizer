import { randomColor } from '../tools/colors'
import { getRandomInt } from '../tools/utils'
import { context } from '../tools/canvas'
import { spectrumFiltered, vol } from './draw'

let canvas = document.getElementById('canvas')

export let CircleArr = []
function randomSpectrum() {
  return spectrumFiltered[Math.floor(Math.random() * spectrumFiltered.length)]
}

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
    console.log('render')
    context.globalCompositeOperation = 'screen'
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    context.closePath()

    context.fillStyle = this.color
    context.fill()
  }
  
  tween() {
    console.log('tween')
    // movement coordinates
    // (canvas size * random circular edge) + centering
    let angle = getRandomInt(0, 360)
    let randomX = ((canvas.offsetWidth / 1) * Math.cos(angle * Math.PI / 180)) + window.innerWidth / 2
    let randomY = ((canvas.offsetHeight / 1) * Math.sin(angle * Math.PI / 180)) + window.innerHeight / 2
    
    TweenMax.to(this, this.time, {
      x: randomX,
      y: randomY,
      size: this.size,
      ease: CustomEase.create('launchEffect', '0.07, 0.85, 1, 1'),
      onUpdate: () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        CircleArr.forEach((circle) => {
          circle.update(context)
        })
      },
      onComplete: () => {
        this.kill()
      }
    })
  }

  beat(context) {
    console.log('beat')
    TweenMax.to(this, 0, {
      size: ((randomSpectrum() / 5) * (vol / 20)) / 2
    })
    // this.render(context)
  }

  update(context) {
    console.log('update')
    this.render(context)
    this.beat(context)
  }

  kill() {
    console.log('kill')
    let c = CircleArr.indexOf(this)
    CircleArr.splice(c, 1)
  }
}