// build canvas
export function canvas() {
  canvas = document.getElementById('canvas')
  canvasContext = canvas.getContext('2d')
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

export let canvasContext