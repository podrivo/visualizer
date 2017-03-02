var sound, amplitude, fft, vol, spectrum,
    spectrumFiltered,
    counter,
    sizeL, sizeM, sizeS, quantity, time, scale;





function preload() {
  sound = loadSound('audio/song01.mp3');
}





function setup() {

  // hide canvas
  createCanvas(0,0);

  // call amplitude and connect
  amplitude = new p5.Amplitude();
  amplitude.setInput(sound);

  // call fft and connect
  fft = new p5.FFT();
  fft.setInput(sound);

  sound.stop();
  counter = 0;
}





function draw() {

  // get data
  vol = amplitude.getLevel();
  spectrum = fft.analyze(256);

  // remove zeros from fft
  spectrumFiltered = spectrum.filter(function(e) {
    return e !== 0;
  });

  function sizeL() {return getRandomInt(180, 260)};
  function sizeM() {return getRandomInt(46, 120)};
  function sizeS() {return getRandomInt(32, 92)}
  quantity = 1;
  time = 5;
  scale = 1;

  if (sound.isPlaying()) {

    // random spectrum number
    function randomSpectrum() {
      return spectrumFiltered[Math.floor(Math.random()*spectrumFiltered.length)]
    };
    console.log((randomSpectrum()/200 * vol)*1.8);

    for (var i = 0; i < dotsArr.length; i++) {

      // flick effect
      // circlesArr[i].scale = (ranSpectrum()/200 * noise(vol))*1.8
      TweenMax.to(dotsArr[i], 0, {
        scale: (randomSpectrum()/200 * noise(vol))*1.8
      });


    }

    // circle creation
    // small more slower
    if (vol > 0.01 && vol < 0.04 && counter > 10) {
    // if (vol >= 0 && counter >= 0) {
      // console.log('teste',vol);
      counter = 0;
      // createDots(2);
      createDots(quantity, sizeS()/1.6, time*(vol*420))
    }

    // small slower
    else if (vol > 0.04 && vol < 0.08 && counter > 10) {
      counter = 0;
      // createDots(2);
      createDots(quantity, sizeS(), time*(vol*120));
    }

    // small
    else if (vol > 0.08 && vol < 0.14 && counter > 10) {
      counter = 0;
      // createDots(2);
      createDots(quantity, sizeS(), time*(vol*50));
    }

    // medium
    else if (vol > 0.14 && vol < 0.24 && counter > 2) {
      counter = 0;
      // createDots(2);
      createDots(quantity, sizeM(), time*(vol*20));
    }

    // big
    else if (vol > 0.24 && vol < 0.36 && counter > 2) {
      counter = 0;
      // createDots(2);
      createDots(quantity, sizeL(), time*(vol*10));
    }

    // big
    else if (vol > 0.36 && vol < 0.46 && counter > 1) {
      counter = 0;
      // createDots(2);
      createDots(quantity*2, sizeL(), time*(vol*6));
    }

    // explosion
    else if (vol > 0.5 && counter > 1) {
      counter = 0;
      // createDots(2);
      createDots(quantity*2, sizeL()*1.2, time*(vol));
      createDots(quantity*4, sizeM()*1.2, time*(vol*1.6));
      createDots(quantity*4, sizeS()*1.2, time*(vol*2.1));
      createDots(quantity*4, sizeS()*1.2, time*(vol*2.2));
      createDots(quantity*4, sizeS()*1.2, time*(vol*2.3));
    }

    counter++
  }

}





// play after click
document.body.addEventListener('click', function(){
  if (sound.isPlaying()) {
    sound.pause();

    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 1, {
        scale: 0
      });
    }
  } else {
    sound.play();
    // sound.setVolume(0.1);
  }
});
