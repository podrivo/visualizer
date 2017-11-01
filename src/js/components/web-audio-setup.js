export let audio
export let analyser

export function webAudioSetup() {
  // function webAudioSetup() {
  // let audio, context, audioContext, source, analyser, frequencyData, gainNode

  audio = new Audio();

  // get audio stream url
  // soundcloudUrl()

  audio.crossOrigin='anonymous';
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();

  let source = audioContext.createMediaElementSource(audio);
  source.connect(audioContext.destination);

  let gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  source.connect(gainNode);

  analyser = audioContext.createAnalyser();
  source.connect(analyser);

  // console.log(audio)
  // return audio
}