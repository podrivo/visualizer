export let audio
export let analyser

export function webAudioSetup() {

  audio = new Audio();
  audio.crossOrigin='anonymous';
  
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let source = audioContext.createMediaElementSource(audio);
  source.connect(audioContext.destination);

  let gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  source.connect(gainNode);

  analyser = audioContext.createAnalyser();
  source.connect(analyser);
}