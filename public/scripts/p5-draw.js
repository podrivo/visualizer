
var vol, spectrum, spectrumFiltered,
    counter = 0,
    quantity, time, scale,
    average;



function getAverageVolume(spectrum) {
  var vals = 0;
  var length = spectrum.length;

  for (var i=0; i<length; i++) {
    vals += spectrum[i];
  }
  // console.log(vals, length);

  return (vals / length)
}



function draw() {

  // get data
  // vol = amplitude.getLevel();
  // spectrum = fft.analyze(256);

  // vol = new Uint8Array(analyser.maxDecibels);
  // spectrum = new Uint8Array(analyser.fftSize);
  spectrum = new Uint8Array(analyser.frequencyBinCount);
  // spectrum2 = new Float32Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(spectrum);
  // analyser.getFloatFrequencyData(spectrum2);
  // analyser.getByteTimeDomainData(spectrum);
  // analyser.getByteFrequencyData(vol);

  vol = getAverageVolume(spectrum);
  // console.log(vol);

  // remove zeros from fft
  spectrumFiltered = spectrum.filter(function(e) { return e !== 0 });

  // console.log('fps running');
  // console.log(spectrumFiltered, spectrum.length, average);

  function sizeL() {return getRandomInt(180, 260)};
  function sizeM() {return getRandomInt(46, 120)};
  function sizeS() {return getRandomInt(32, 92)}
  quantity = 1;
  time = 5; // 5
  scale = 1;

  // if (sound.isPlaying()) {
  if (audio.paused == false) {
    // console.log('playing');

    // random spectrum number
    function randomSpectrum() {
      return spectrumFiltered[Math.floor(Math.random()*spectrumFiltered.length)]
    };
    // console.log((randomSpectrum()/200 * vol)*1.8);

    for (var i = 0; i < dotsArr.length; i++) {

      // flick effect
      // circlesArr[i].scale = (ranSpectrum()/200 * noise(vol))*1.8
      TweenMax.to(dotsArr[i], 0, {
        // scale: (randomSpectrum()/200 * noise(vol))*1.8
        scale: (randomSpectrum()/200 * (vol/150))*2
      });
    }

    // circle creation
    // small and slower
    if (vol > 5 && vol < 14 && counter > 6) {
      console.log('small and slower:', vol);
      counter = 0;
      createDots(quantity, sizeS()*4, time*(vol/2))
    }

    // small slower
    // else if (vol > 50 && vol < 80 && counter > 10) {
    //   counter = 0;
    //   createDots(quantity, sizeS(), time*(vol/20));
    // }

    // small
    // else if (vol > 80 && vol < 100 && counter > 10) {
    //   counter = 0;
    //   createDots(quantity, sizeS(), time*(vol/8));
    // }

    // medium
    // else if (vol > 100 && vol < 120 && counter > 2) {
    //   counter = 0;
    //   createDots(quantity, sizeM(), time*(vol/5));
    // }

    // big
    // else if (vol > 120 && vol < 140 && counter > 2) {
    //   counter = 0;
    //   createDots(quantity, sizeL(), time*(vol/5));
    // }

    // big
    // else if (vol > 0.36 && vol < 0.46 && counter > 1) {
    //   counter = 0;
    //   // createDots(2);
    //   createDots(quantity*2, sizeL(), time*(vol*6));
    // }

    // explosion
    else if (vol > 125 && counter > 1) {
      console.log('explosion:', vol);
      counter = 0;
      createDots(quantity*1, sizeL(), time*(vol/40));
      createDots(quantity*2, sizeM(), time*(vol/40));
      createDots(quantity*3, sizeS(), time*(vol/120));
      createDots(quantity*3, sizeS(), time*(vol/130));
      createDots(quantity*3, sizeS(), time*(vol/140));
    }

    counter++
  }

  killDots();
  // soundLoaded();

}





// play after click
// document.body.addEventListener('click', function(){
  // playSound();
// });
