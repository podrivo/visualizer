import { draw } from '../components/draw'
import { kill } from '../components/kill'

export function raf() {
  requestAnimationFrame(repeat)
  
  function repeat() {
    requestAnimationFrame(repeat)
    draw()
    // kill()
  }
}
