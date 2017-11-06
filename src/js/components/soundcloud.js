import { audio } from '../tools/audio'
import { inputUrl } from './play-pause'

let url, sound, soundUrl, streamUrl, trackInfo, apiUrl, clientId

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

export function soundCloudUrl(inputUrl) {
  clientId = "client_id=eab076c133468510a6efbe8ca1390e96"
  apiUrl = "https://api.soundcloud.com/resolve.json?url=" + inputUrl + "&" + clientId

  get(apiUrl, function(response) {
    trackInfo = JSON.parse(response)
    streamUrl = trackInfo.stream_url + "?" + clientId
    audio.src = streamUrl
  });
};
