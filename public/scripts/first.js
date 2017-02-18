(function(){

  // console.log('yo');

  var container = document.getElementById('container');




})()
function createDots() {
  dot = document.createElement('i');
  container.appendChild(dot);
  console.log('teste');
}

function preload() {
  sound = loadSound('audio/song01.mp3');
}

function setup() {
  createCanvas(0,0);
  // sound.play();
}

function draw() {
  console.log('yo');
  createDots();
}
