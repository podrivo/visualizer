

var container = document.getElementById('container');
var dotsArr = [];
// var dot;
// var anima;


function createDots() {

  // create element
  // push to array and DOM
  var dot = document.createElement('i');
  container.appendChild(dot);
  dotsArr.push(dot);

  // get random values
  var x = getRandomInt(-220,220);
  var y = getRandomInt(-220,220);

  // animate to
  TweenMax.to(dot, 2, {
    transform: 'translate(' + x + 'px,' + y + 'px)',
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
