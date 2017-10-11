
var url, sound, soundUrl, streamUrl, trackInfo;
var trackUrl, clientId;

function get(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText);
    }
  }
  request.open("GET", url, true);
  request.send(null);
}


// trackUrl = "https://soundcloud.com/the-outsider/the-outsider-death-by-melody";
// trackUrl = "https://soundcloud.com/kennedyjones/gramatikkennedyjones";
// trackUrl = "https://soundcloud.com/pum818pkin/agustin-barrios-julia-florida-barcarola-20160924";
trackUrl = "https://soundcloud.com/weval/intro-preview";
clientId = "client_id=eab076c133468510a6efbe8ca1390e96"
apiUrl = "https://api.soundcloud.com/resolve.json?url=" +  trackUrl + "&" + clientId

function soundcloudUrl() {
  get(apiUrl, function(response) {
    trackInfo = JSON.parse(response);
    streamUrl = trackInfo.stream_url + "?" + clientId;
    audio.src = streamUrl;
  });
};
