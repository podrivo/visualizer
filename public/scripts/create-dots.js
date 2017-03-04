

// DOM container, dots array and dot itself
var container = document.getElementById('container'),
    dotsArr = [],
    dot, anima;





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
  anima = TweenMax.to(dot, time, {
    x: ranX,
    y: ranY,
    // ease: Expo.easeOut,
    // ease: CustomEase.create('teste', '0,0,.580,1'),
    ease: CustomEase.create('launchEffect', '0.215,0.61,0.355,1'),
    onComplete: killDots,
  });
}
