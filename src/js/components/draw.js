import { getRandomInt } from '../tools/utils'
import { audio, analyser } from '../tools/audio'
import { DotsArr, Dot } from './dots'

let counter = 0

function getAverageSpectrum(spectrum) {
  var values = 0
  var length = spectrum.length

  for (var i = 0; i < length; i++) {
    values += spectrum[i]
  }

  return (values / length)
}

export function draw() {
  let spectrum = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(spectrum)
  let vol = getAverageSpectrum(spectrum) // needs to be afterwards

  // remove zeros from spectrum/fft
  let spectrumFiltered = spectrum.filter(function(e) { return e !== 0 })
  
  // parameters
  let sizeL = getRandomInt(180, 260)
  let sizeM = getRandomInt(46, 120)
  let sizeS = getRandomInt(32, 92)
  let quantity = 1
  let time = 4.6
  let scale = 1

  if (!audio.paused) {

    // random spectrum number
    function randomSpectrum() {
      return spectrumFiltered[Math.floor(Math.random()*spectrumFiltered.length)]
    }

    for (var i = 0; i < DotsArr.length; i++) {

      // flick effect
      TweenMax.to(DotsArr[i], 0, {
        // scale: (randomSpectrum()/200 * noise(vol))*1.8
        // scale: (randomSpectrum()/200 * (vol/150))*2
        scale: (spectrumFiltered[i]/200 * (vol/150))*2
      })
    }

    // circle creation
    // smaller and slower
    if (vol > 5 && vol < 14 && counter > 6) {
      counter = 0
      new Dot(sizeS*4, time*(vol/2))
    }

    // smaller
    else if (vol > 14 && vol < 20 && counter > 10) {
      counter = 0
      new Dot(sizeS, time*(vol/50))
    }

    // small
    else if (vol > 20 && vol < 60 && counter > 10) {
      counter = 0
      new Dot(sizeS, time*(vol/8))
    }

    // medium
    else if (vol > 60 && vol < 90 && counter > 2) {
      counter = 0
      new Dot(sizeM, time*(vol/5))
    }

    // big
    else if (vol > 90 && vol < 120 && counter > 2) {
      counter = 0
      new Dot(sizeL, time*(vol/5))
    }

    // bigger
    else if (vol > 120 && vol < 130 && counter > 1) {
      counter = 0
      new Dot(sizeL, time*(vol/120))
    }

    // explosion
    else if (vol > 135 && counter > 1) {
      counter = 0
      new Dot(sizeL, time*(vol/50))
      new Dot(sizeM, time*(vol/50))
      new Dot(sizeS, time*(vol/120))
      new Dot(sizeS, time*(vol/130))
      new Dot(sizeS, time*(vol/140))
    }

    // increase counter
    counter++
  }
}
