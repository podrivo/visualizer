
var audio, fps, context, source, analyser, frequencyData, gainNode;

// var trackUrl = streamUrl;
var trackUrl = 'https://api.soundcloud.com/tracks/284720208/stream?client_id=eab076c133468510a6efbe8ca1390e96';
// var trackUrl = 'https://api.soundcloud.com/tracks/311734519/stream?client_id=eab076c133468510a6efbe8ca1390e96';
var trackUrl = 'https://api.soundcloud.com/tracks/268435373/stream?client_id=eab076c133468510a6efbe8ca1390e96';

function webAudioSetup() {
  audio = new Audio();
  audio.crossOrigin='anonymous';
  audio.src = trackUrl;
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
