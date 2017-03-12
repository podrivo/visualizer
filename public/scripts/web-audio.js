var fps, context, source, analyser, frequencyData;
// var audio = document.getElementById('audio'),
var audio,
    trackUrl = 'https://api.soundcloud.com/tracks/284720208/stream?client_id=eab076c133468510a6efbe8ca1390e96';
    // trackUrl = 'https://api.soundcloud.com/tracks/311734519/stream?client_id=eab076c133468510a6efbe8ca1390e96';


function audioLoaded() {
  // findTrack();
  console.log('onload ready');

  audio = new Audio();
  audio.crossOrigin='anonymous';
  audio.src = trackUrl;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  source = audioContext.createMediaElementSource(audio);
  source.connect(audioContext.destination);

  // gain = audioContext.createGain();
  // gain.connect(audioContext.destination);
  // source.connect(gain);

  analyser = audioContext.createAnalyser();
  source.connect(analyser);

  // frequencyData = new Uint8Array(analyser.frequencyBinCount);
  // analyser.getByteFrequencyData(frequencyData);

  // console.log(analyser.fftSize, analyser.frequencyBinCount, frequencyData);


  document.body.addEventListener('click', function(){
    playSound();
    startAnimationFrame();
  });
};
audioLoaded();
