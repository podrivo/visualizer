

var container = document.getElementById('container');
var dotsArr = [];
// var dot;
// var anima;


palette1 = ['#25BEEA', '#C6483F', '#D0832A', '#AB5D45', '#EB675D', '#5B194A', '#A13084']
palette2 = ['#1D1D1D', '#C54A41', '#FCB461', '#EA695F', '#30B8FF', '#5AAAD3', '#4B2040']
palette3 = ['#2F263B', '#124EAB', '#E27E77', '#1571FF', '#2B3548', '#FFCFB6', '#F6B7CE']
palette4 = ['#266EFF', '#E27E77', '#FFCFB6', '#F6B7CE', '#2B3548', '#124EAB', '#0098FF']
palette5 = ['#29313A', '#E27E77', '#FFCFB6', '#266EFF', '#FFFEF1', '#30B8FF', '#4C4E8D', '#B8B8B8']
var paletteArr = [palette1, palette2, palette3, palette4, palette5]
var randomPaletteArr = paletteArr[Math.floor(Math.random() * paletteArr.length)]
function randomColor() {
  // Utils.randomChoice(ranColorArr)
  return randomPaletteArr[Math.floor(Math.random() * randomPaletteArr.length)]
}
document.body.style.backgroundColor = randomPaletteArr[0];
console.log(randomPaletteArr);




function createDots() {

  // create element
  // push to array and DOM
  var dot = document.createElement('i');
  container.appendChild(dot);
  dotsArr.push(dot);

  // random background color
  dot.style.backgroundColor = randomColor();

  // get random values
  // var x = getRandomInt(-220,220);
  // var y = getRandomInt(-220,220);

  // movement coordinates
  angle = getRandomInt(0,360);
  moveAreaX = container.offsetWidth;
  moveAreaY = container.offsetHeight;
  // moveAreaY = container.offsetHeight*7/4;

  // dotRect = dot.getBoundingClientRect();
  // console.log(dotRect.top, rect.right, rect.bottom, dotRect.left);

  // random position on the edge of a circle
  ranX = moveAreaX * Math.cos(angle * Math.PI / 180)
  ranY = moveAreaY * Math.sin(angle * Math.PI / 180)
  // console.log(angle, moveAreaX, moveAreaY, ranY, ranX);

  // animate to
  TweenMax.to(dot, 2, {
    x: ranX,
    y: ranY,
    onComplete: kill,
  });
}





// check every dot, to see if it's animating
// if not, remove from DOM and array
function kill() {
  for (var i = 0; i < dotsArr.length; i++) {
    if (TweenMax.isTweening(dotsArr[i]) == false) {
      container.removeChild(dotsArr[i]);
      dotsArr.splice(i,1);
    }
  }
}





// random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function preload() {
  sound = loadSound('audio/song01.mp3');
}

function setup() {
  createCanvas(0,0);
  // sound.play();
}

function draw() {

  if (mouseIsPressed) {
    createDots();
  }

}
