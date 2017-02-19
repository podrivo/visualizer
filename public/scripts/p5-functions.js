function preload() {
  sound = loadSound('audio/song01.mp3');
}

function setup() {
  createCanvas(0,0);
}

function draw() {

  if (mouseIsPressed) {
    // console.log('teste', sound.isPlaying());
    // if (sound.isPlaying() == false) {
    //   sound.play();
    //   console.log('teste');
    // } else {
    //   sound.pause();
    // }
    // else if (sound.isPlaying == true) {
      createDots();
    // }
  } else {
    // sound.pause();
  }

}
