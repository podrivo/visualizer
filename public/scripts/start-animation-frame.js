
function startAnimationFrame() {

  var pause = 'pause',
  body = document.body;

  function repeat() {
    fps = requestAnimationFrame(repeat);
    draw();

    // console.log('fps running', spectrum, spectrumFiltered);
    // console.log(analyser.fftSize, analyser.frequencyBinCount, frequencyData);
  }

  if ( body.classList.contains(pause) ) {

    requestAnimationFrame(repeat);
    body.classList.remove(pause);

  } else {

    cancelAnimationFrame(fps)
    body.classList.add(pause);
  }

}
