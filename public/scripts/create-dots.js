

// DOM container, dots array and dot itself
var container = document.getElementById('container'),
    dotsArr = [],
    dot;





// random integer number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





function createDots(quantity, size, time, scale) {

  // create element
  // push to array and DOM
  dot = document.createElement('i');
  container.appendChild(dot);
  dotsArr.push(dot);

  // random background color
  dot.style.width = size + 'px';
  dot.style.height = size + 'px';
  dot.style.backgroundColor = randomColor();
  // dot.style.scale = 0;
  // dot.style.backgroundColor = randomColor();

  // movement coordinates
  angle = getRandomInt(0,360);
  moveAreaX = container.offsetWidth;
  moveAreaY = container.offsetHeight;

  // random position on the edge of a circle
  ranX = moveAreaX * Math.cos(angle * Math.PI / 180)
  ranY = moveAreaY * Math.sin(angle * Math.PI / 180)

  // animate to
  TweenMax.to(dot, time, {
    x: ranX,
    y: ranY,
    // ease: Expo.easeOut,
    ease: CustomEase.create('teste', '0,0,.580,1'),
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
