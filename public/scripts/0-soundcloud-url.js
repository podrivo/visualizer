


var sound, soundUrl, streamUrl, trackInfo;
var trackPermalinkUrl, clientId;


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


// trackPermalinkUrl = "https://soundcloud.com/the-outsider/the-outsider-death-by-melody";
trackPermalinkUrl = "https://soundcloud.com/kennedyjones/gramatikkennedyjones";
// trackPermalinkUrl = "https://soundcloud.com/pum818pkin/agustin-barrios-julia-florida-barcarola-20160924";
clientId = "client_id=eab076c133468510a6efbe8ca1390e96"


function soundcloudUrl() {
  get("https://api.soundcloud.com/resolve.json?url=" +  trackPermalinkUrl + "&" + clientId,
    function (response) {
      trackInfo = JSON.parse(response);
      streamUrl = "'" + trackInfo.stream_url + "?" + clientId + "'";
      console.log(streamUrl);
  });
};
// soundcloudUrl();
