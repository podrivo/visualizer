import { DotsArr } from './dots'

// check every dot - remove from DOM and array
export function kill() {
  for (var i = 0; i < DotsArr.length; i++) {
    if (
      DotsArr[i].getBoundingClientRect().right < container.getBoundingClientRect().left ||
      DotsArr[i].getBoundingClientRect().bottom < container.getBoundingClientRect().top ||
      DotsArr[i].getBoundingClientRect().top > container.getBoundingClientRect().bottom ||
      DotsArr[i].getBoundingClientRect().left > container.getBoundingClientRect().right
    ) {
      container.removeChild(DotsArr[i])
      DotsArr.splice(i, 1)
      console.log(DotsArr)
    }
  }
}
