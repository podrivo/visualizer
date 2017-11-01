import { inputUrl } from './sound-play-pause'
import { audio } from './web-audio-setup'

let url, sound, soundUrl, streamUrl, trackInfo,
    apiUrl, trackUrl, clientId

function get(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText)
    }
    if (request.status === 403) { // forbidden
      console.log('música bloqueada :(')
    }
  }
  request.open("GET", url, true)
  request.send(null)
}


// trackUrl = "https://soundcloud.com/the-outsider/the-outsider-death-by-melody";
// trackUrl = "https://soundcloud.com/kennedyjones/gramatikkennedyjones";
// trackUrl = "https://soundcloud.com/pum818pkin/agustin-barrios-julia-florida-barcarola-20160924";
// trackUrl = "https://soundcloud.com/gramatik/10-gramatik-muy-tranquilo";
// trackUrl = "https://soundcloud.com/weval/intro-preview";

export function soundcloudUrl(inputUrl) {
  trackUrl = inputUrl
  clientId = "client_id=eab076c133468510a6efbe8ca1390e96"
  apiUrl = "https://api.soundcloud.com/resolve.json?url=" +  trackUrl + "&" + clientId

  get(apiUrl, function(response) {
    trackInfo = JSON.parse(response)
    streamUrl = trackInfo.stream_url + "?" + clientId
    audio.src = streamUrl
  });
};
