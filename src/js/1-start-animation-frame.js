
function startAnimationFrame() {

  var pause = 'pause',
  body = document.body;

  function repeat() {
    fps = requestAnimationFrame(repeat);
    draw();
    killDots();
    soundLoaded();
  }

  // check if theres '.pause' class in body
  // needs '.pause' in markup to work
  if ( body.classList.contains(pause) ) {

    requestAnimationFrame(repeat);
    body.classList.remove(pause);

  } else {

    cancelAnimationFrame(fps)
    body.classList.add(pause);
  }
}
