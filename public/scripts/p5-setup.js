
var amplitude, fft;

function setup() {

  // hide canvas
  createCanvas(0,0);

  // call amplitude and connect
  amplitude = new p5.Amplitude();
  amplitude.setInput(sound);

  // call fft and connect
  fft = new p5.FFT();
  fft.setInput(sound);

  // sound.stop();
  counter = 0;
}
