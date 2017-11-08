import { draw } from './draw'
import { kill } from './kill'

export function startAnimationFrame() {
  
  let pause = 'pause',
      body = document.body
  
  function repeat() {
    let fps = requestAnimationFrame(repeat)
    draw()
    // kill()
    // soundLoaded();
  }

  // check if theres '.pause' class in body
  // needs '.pause' in markup to work
  if ( body.classList.contains(pause) ) {

    requestAnimationFrame(repeat)
    body.classList.remove(pause)

  } else {

    cancelAnimationFrame(fps)
    body.classList.add(pause)
  }
}
