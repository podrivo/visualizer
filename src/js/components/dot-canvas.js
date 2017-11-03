import { randomColor } from '../tools/colors'
import { getRandomInt } from '../tools/utils'
import { canvasContext } from '../tools/canvas'
// import { killDots } from './kill-dots'

export let DotArr = []

// export function Dot(size) {
//   console.log('Dot')
  
//   this.x = window.innerWidth / 2
//   this.y = window.innerHeight / 2
//   this.size = size

//   DotArr.push(this)
//   this.paint(size)
// }

// Dot.prototype.paint = function(size) {
//   console.log('Dot.paint')

//   canvasContext.beginPath()
//   canvasContext.fillStyle = randomColor()
//   canvasContext.arc(this.x, this.y, size, 0, 2 * Math.PI)
//   canvasContext.closePath()
//   canvasContext.fill()

//   this.move()
// }

// Dot.prototype.move = function() {
//   console.log('Dot.move')

// movement coordinates
let angle = getRandomInt(0, 360)
let moveAreaX = window.innerWidth
let moveAreaY = window.innerHeight
// random position on the edge of a circle
let ranX = moveAreaX * Math.cos(angle * Math.PI / 180)
let ranY = moveAreaY * Math.sin(angle * Math.PI / 180)

// console.log(ranX, ranY)

//   // tween position
//   // TweenMax.to(this, 2, {
//   //   x: ranX,
//   //   y: ranY
//   //   // ease: Expo.easeOut,
//   //   // ease: CustomEase.create('teste', '0, 1, 1, 1'),
//   //   // ease: CustomEase.create('launchEffect', '.07,.85,1,1'),
//   //   // onUpdate: this.paint,
//   //   // onComplete: killDots,
//   //   // force3D: true
//   // })
//   TweenMax.fromTo(this, 2, {scale: 1}, {scale: 10})
// }


// let myDot
// canvas = document.getElementById('canvas');
// context = canvas.getContext('2d');
// canvasContext.beginPath()
// canvasContext.fillStyle = randomColor()

let DotObj = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  size: 0
}

export function Dot() {
  console.log('Dot')

  // this.x = window.innerWidth / 2
  // this.y = window.innerHeight / 2
  // this.size = size

  DotArr.push(this)
  console.log(DotArr)
  // this.paint(DotObj, canvasContext)
  // canvasContext.beginPath()
  // canvasContext.fillStyle = randomColor()
  // canvasContext.arc(DotObj.x, DotObj.y, DotObj.width, 0, 2 * Math.PI)
  // canvasContext.closePath()
  // canvasContext.fill()
  paint()
}

function paint() {
  console.log('Dot.paint')
  canvasContext.beginPath()
  canvasContext.fillStyle = randomColor()
  canvasContext.arc(DotObj.x, DotObj.y, DotObj.width, 0, 2 * Math.PI)
  canvasContext.closePath()
  canvasContext.fill()
  move()
  // function drawDot(DotObj, canvasContext) {
  // }
}

function renderCanvas() {
  canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight)
  paint()
}

function move() {
  TweenMax.to(DotObj, 2, { 
    // bezier: {
    //   values: [
    //     { x: ranX, y: ranY }
    //   ]
    // },
    x: ranX, 
    y: ranY,
    width: 120,
    height: 120,
    onUpdate: renderCanvas
    // ease: CustomEase.create('launchEffect', '.07,.85,1,1')
  })
}


