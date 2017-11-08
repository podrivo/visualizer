import { DotsArr } from './dots'

// check every dot
// remove from DOM and array
export function kill() {

  for (var i = 0; i < DotsArr.length; i++) {

    // when the dot gets out of container
    if (
      DotsArr[i].getBoundingClientRect().right < container.getBoundingClientRect().left ||
      DotsArr[i].getBoundingClientRect().bottom < container.getBoundingClientRect().top ||
      DotsArr[i].getBoundingClientRect().top > container.getBoundingClientRect().bottom ||
      DotsArr[i].getBoundingClientRect().left > container.getBoundingClientRect().right
    ) {
      container.removeChild(DotsArr[i]);
      dotsArr.splice(i,1);
    }

    // in case the animation stops
    else if (TweenMax.isTweening(DotsArr[i]) == false) {
      container.removeChild(DotsArr[i]);
      DotsArr.splice(i,1);
    }

  }

}
