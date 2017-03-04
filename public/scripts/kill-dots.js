
// check every dot, to see if it's animating
// if not, remove from DOM and array
function killDots() {

  for (var i = 0; i < dotsArr.length; i++) {

    if (dotsArr[i].getBoundingClientRect().right < container.getBoundingClientRect().left || dotsArr[i].getBoundingClientRect().bottom < container.getBoundingClientRect().top || dotsArr[i].getBoundingClientRect().top > container.getBoundingClientRect().bottom ||
    dotsArr[i].getBoundingClientRect().left > container.getBoundingClientRect().right) {
      container.removeChild(dotsArr[i]);
      dotsArr.splice(i,1);
    }

    else if (TweenMax.isTweening(dotsArr[i]) == false) {
      container.removeChild(dotsArr[i]);
      dotsArr.splice(i,1);
    }

  }

}
