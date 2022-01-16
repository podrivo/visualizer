import { DotsArr } from './dots'
import { container } from '../tools/utils'

// check every dot - remove from DOM and array
export function kill() {
  console.log(DotsArr.length);
  for (var i = 0; i < DotsArr.length; i++) {

    const el = DotsArr[i]
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // console.log('ENTER')
        return
      }
      // console.log('LEAVE')
      // container.removeChild(DotsArr[i])
      // DotsArr.splice(i, 1)
    }, {
      root: null,
      threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    })

    observer.observe(el);

    // if (
    //   DotsArr[i].getBoundingClientRect().right < container.getBoundingClientRect().left ||
    //   DotsArr[i].getBoundingClientRect().bottom < container.getBoundingClientRect().top ||
    //   DotsArr[i].getBoundingClientRect().top > container.getBoundingClientRect().bottom ||
    //   DotsArr[i].getBoundingClientRect().left > container.getBoundingClientRect().right
    // ) {
    //   container.removeChild(DotsArr[i])
    //   DotsArr.splice(i, 1)
    // }
  }
}
