import { randomColor } from '../tools/colors'
import { container, getRandomInt, randomArrElements } from '../tools/utils'

export let DotsArr = []

export class Dot {
  constructor(size, time) {
    this.size = size
    this.time = time
    
    const dot = document.createElement('i')
    container.appendChild(dot)
    DotsArr.push(dot)
    
    this.render(dot, size, time)
  }
  
  render(dot, size, time) {
    dot.style.width = size + 'px'
    dot.style.height = dot.style.width
    dot.style.backgroundColor = randomColor()
    // dot.style.borderStyle = 'solid'
    // dot.style.borderWidth = 'medium'
    // dot.style.borderColor = randomColor()
    dot.style.scale = 0.4

    this.anima(container, dot, time)
  }

  anima(container, dot, time) {
    let angle = getRandomInt(0, 360)
    let ranX = (container.offsetWidth / 2) * Math.cos(angle * Math.PI / 180)
    let ranY = (container.offsetHeight / 2) * Math.sin(angle * Math.PI / 180)
    
    TweenMax.to(dot, time, {
      x: ranX,
      y: ranY,
      // ease: CustomEase.create('fire', '.07,.85,1,1'),
      // ease: CustomEase.create('fire', '0.075, 0.82, 0.165, 1'),
      ease: Circ.easeIn,
      force3D: true,
      // onComplete: this.die,
      // onCompleteParams: [container, dot]
    })
  }
}
