import { draw } from '../components/draw'

export function raf() {
  requestAnimationFrame(repeat)
  
  function repeat() {
    requestAnimationFrame(repeat)
    draw()
  }
}
