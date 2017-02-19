var container = document.getElementById('container'),
    dotsArr = [],
    dot;

function createDots() {

  // create element
  // push to array and DOM
  dot = document.createElement('i');
  container.appendChild(dot);
  dotsArr.push(dot);

  // random background color
  dot.style.backgroundColor = randomColor();

  // movement coordinates
  angle = getRandomInt(0,360);
  moveAreaX = container.offsetWidth;
  moveAreaY = container.offsetHeight;

  // random position on the edge of a circle
  ranX = moveAreaX * Math.cos(angle * Math.PI / 180)
  ranY = moveAreaY * Math.sin(angle * Math.PI / 180)

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
