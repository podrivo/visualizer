import { getRandomInt, getAverageNumber, randomArrElements } from '../tools/utils'
import { audio, analyser } from '../tools/audio'
import { DotsArr, Dot } from './dots'

let counter = 0

export function draw() {
  let spectrum = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(spectrum)
  let vol = getAverageNumber(spectrum)

  // remove zeros from spectrum/fft
  let spectrumFiltered = spectrum.filter(function(e) { return e !== 0 })
  
  // parameters
  let sizeL = getRandomInt(180, 260)
  let sizeM = getRandomInt(46, 120)
  let sizeS = getRandomInt(32, 92)
  let time = 10

  if (!audio.paused) {

    // flick effect
    for (var i = 0; i < DotsArr.length; i++) {
      TweenMax.to(DotsArr[i], 0, {
        // scale: (randomArrElements(spectrumFiltered)/200 * (vol/200))*2
        scale: (spectrumFiltered[i]/200 * (vol/200))*2
      })
    }

    // smaller and slower
    if (vol > 5 && vol < 14 && counter > 6) {
      counter = 0
      new Dot(sizeS/2, time)
    }

    // smaller
    else if (vol > 14 && vol < 20 && counter > 10) {
      counter = 0
      new Dot(sizeS, time)
    }

    // small
    else if (vol > 20 && vol < 60 && counter > 10) {
      counter = 0
      new Dot(sizeS, time)
    }

    // medium
    else if (vol > 60 && vol < 90 && counter > 2) {
      counter = 0
      new Dot(sizeM, time)
    }

    // big
    else if (vol > 90 && vol < 120 && counter > 2) {
      counter = 0
      new Dot(sizeL, time)
    }

    // bigger
    else if (vol > 120 && vol < 130 && counter > 1) {
      counter = 0
      new Dot(sizeL, time)
    }

    // explosion
    else if (vol > 135 && counter > 1) {
      counter = 0
      new Dot(sizeL, time)
      new Dot(sizeM, time)
      new Dot(sizeS, time)
      new Dot(sizeS, time)
      
      new Dot(sizeS, time)
      new Dot(sizeS, time)
      new Dot(sizeS, time)
    }

    // increase counter
    counter++
  }
}
