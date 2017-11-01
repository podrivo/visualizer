import { dotsArr } from './create-dots'

// check every dot
// remove from DOM and array
export function killDots() {

  for (var i = 0; i < dotsArr.length; i++) {

    // when the dot gets out of container
    if (
      dotsArr[i].getBoundingClientRect().right < container.getBoundingClientRect().left ||
      dotsArr[i].getBoundingClientRect().bottom < container.getBoundingClientRect().top ||
      dotsArr[i].getBoundingClientRect().top > container.getBoundingClientRect().bottom ||
      dotsArr[i].getBoundingClientRect().left > container.getBoundingClientRect().right
    ) {
      container.removeChild(dotsArr[i]);
      dotsArr.splice(i,1);
    }

    // in case the animation stops
    else if (TweenMax.isTweening(dotsArr[i]) == false) {
      container.removeChild(dotsArr[i]);
      dotsArr.splice(i,1);
    }

  }

}
