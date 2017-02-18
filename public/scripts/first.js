
var container = document.getElementById('container');
var dotsArr = [];

function createDots() {
  // var randomKey = Math.random().toString(36).substring(7);
  // console.log(randomKey);

  var dot = document.createElement('i');
  // dot.setAttribute('id',randomKey);
  container.appendChild(dot);
  dotsArr.push(dot);
  // console.log(dotsArr);

  var x = getRandomInt(-220,220);
  var y = getRandomInt(-220,220);

  TweenMax.to(dot, 2, {
    transform: 'translate(' + x + 'px,' + y + 'px)',
    onComplete: fim,
    // delay: 0.5
  });
  console.log('dot created', x, y);
}

function fim() {
  console.log('animacao acabou');
  console.log(getRandomInt(60,420));
}

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
  // console.log('yo');
  if (mouseIsPressed) {
    createDots();
    // fill(0);
  } else {
    // fill(255);
  }

}
