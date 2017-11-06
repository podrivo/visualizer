// build web audio
export function webAudio() {
  
  audio = new Audio()
  audio.crossOrigin='anonymous'
  
  let audioContext = new (window.AudioContext || window.webkitAudioContext)()
  let source = audioContext.createMediaElementSource(audio)
  source.connect(audioContext.destination)
  
  gainNode.connect(audioContext.destination)
  source.connect(gainNode);
  
  analyser = audioContext.createAnalyser()
  source.connect(analyser);

  // gainNode.gain.value = -1 // mute
}

export let audio, analyser, gainNode