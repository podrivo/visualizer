
var audio, fps, context, source, analyser, frequencyData, gainNode;

function webAudioSetup() {

  audio = new Audio();

  // get audio stream url
  soundcloudUrl()

  audio.crossOrigin='anonymous';
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  source = audioContext.createMediaElementSource(audio);
  source.connect(audioContext.destination);

  gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  source.connect(gainNode);

  analyser = audioContext.createAnalyser();
  source.connect(analyser);

  document.body.addEventListener('click', function(){
    soundPlayPause();
  });
};
