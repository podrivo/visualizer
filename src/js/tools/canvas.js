// build canvas
export function canvas() {
  canvas = document.getElementById('canvas')
  context = canvas.getContext('2d')
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

export let context