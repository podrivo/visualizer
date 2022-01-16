import { getRandomInt, getAverageNumber, randomArrElements } from '../tools/utils'
import { audio, analyser } from '../tools/audio'
import { DotsArr, Dot } from './dots'

let counter = 0

export function draw() {
  let spectrum = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(spectrum)
  let vol = getAverageNumber(spectrum)
  console.log('vol start:', vol);

  // remove zeros from spectrum/fft
  let spectrumFiltered = spectrum.filter(function(e) { return e !== 0 })
  
  // parameters
  let sizeL = getRandomInt(120, 210)
  let sizeM = getRandomInt(46, 100)
  let sizeS = getRandomInt(24, 74)
  let time = 3
  
  let volBase = 5

  let volSmallerSlowerStart = volBase
  let volSmallerSlowerEnd = volSmallerSlowerStart * 1.5
  // console.log('SmallerSlow', volSmallerSlowerStart, volSmallerSlowerEnd);

  let volSmallerStart = volSmallerSlowerEnd
  let volSmallerEnd = volSmallerStart * 1.5
  // console.log('Smaller', volSmallerStart, volSmallerEnd);

  let volSmallStart = volSmallerEnd
  let volSmallEnd = volSmallStart * 1.55
  // console.log('Small', volSmallStart, volSmallEnd);

  let volMediumStart = volSmallEnd
  let volMediumEnd = volMediumStart * 1.6
  // console.log('Medium', volMediumStart, volMediumEnd);

  let volBigStart = volMediumEnd
  let volBigEnd = volBigStart * 1.6
  // console.log('Big', volBigStart, volBigEnd);

  let volBiggerStart = volBigEnd
  let volBiggerEnd = volBiggerStart * 1.7
  // console.log('Bigger', volBiggerStart, volBiggerEnd);

  let volExplosion = volBiggerEnd
  // console.log('Explosion', volExplosion);

  if (!audio.paused) {

    // flick effect
    for (var i = 0; i < DotsArr.length; i++) {
      TweenMax.to(DotsArr[i], 0, {
        // scale: ((randomArrElements(spectrumFiltered) / 200 * (vol / 200)) * 2) + 0.2
        scale: ((spectrumFiltered[i] / 200 * (vol / 200)) * 2) + 0.2
      })
    }

    // smaller and slower
    if (vol > volSmallerSlowerStart && vol < volSmallerSlowerEnd && counter > 4) {
      console.log('vol:', vol, volSmallerSlowerStart, 'smaller and slower', volSmallerSlowerEnd);
      counter = 0
      new Dot(sizeS/2, time)
      // new Dot(sizeS/2, time * 2/3)
    }

    // smaller
    else if (vol > volSmallerStart && vol < volSmallerEnd && counter > 6) {
      console.log('vol:', vol, volSmallerStart, 'smaller', volSmallerEnd);
      counter = 0
      new Dot(sizeS, time)
      // new Dot(sizeS, time * 2 / 3)
    }

    // small
    else if (vol > volSmallStart && vol < volSmallEnd && counter > 6) {
      console.log('vol:', vol, volSmallStart, 'small', volSmallEnd);
      counter = 0
      new Dot(sizeS, time)
      // new Dot(sizeS, time * 2 / 3)
    }

    // medium
    else if (vol > volMediumStart && vol < volMediumEnd && counter > 2) {
      console.log('vol:', vol, volMediumStart, 'medium', volMediumEnd);
      counter = 0
      new Dot(sizeM, time)
      // new Dot(sizeM, time * 2/3)
    }

    // big
    else if (vol > volBigStart && vol < volBigEnd && counter > 2) {
      console.log('vol:', vol, volBigStart, 'big', volBigEnd);
      counter = 0
      new Dot(sizeL, time)
      // new Dot(sizeL, time * 2 / 3)
    }

    // bigger
    else if (vol > volBiggerStart && vol < volBiggerEnd && counter > 2) {
      console.log('vol:', vol, volBiggerStart, 'bigger', volBiggerEnd);
      counter = 0
      new Dot(sizeL, time)
    }

    // explosion
    else if (vol > volExplosion && counter > 2) {
      console.log('vol:', vol, volExplosion, 'explosion');
      counter = 0
      new Dot(sizeL, time * 3 / 4)
      new Dot(sizeL, time * 1 / 2)
      new Dot(sizeM, time * 2 / 3)
      new Dot(sizeM, time * 2 / 3)
      new Dot(sizeS, time * 4 / 5)
      new Dot(sizeS, time * 3 / 4)
      new Dot(sizeS, time * 3 / 4)
    }

    // increase counter
    counter++
  }
}
