

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.spotify.com');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK) {
//       console.log(xhr.responseText); // 'This is the returned text.'
//     } else {
//       console.log('Error: ' + xhr.status); // An error occurred during the request.
//     }
//   }
// };


var sound, soundUrl, streamUrl, trackInfo;


// Basing everything on the track's permalink URL. That is what the user knows.
// Makes it possible to use the text box for pasting any track URL.
// The Outsider is a friend of mine.
// The majority of his tracks are on Mixcloud:
// https://www.mixcloud.com/outsider_music/
// var trackPermalinkUrl = "https://soundcloud.com/the-outsider/the-outsider-death-by-melody";
var trackPermalinkUrl = "https://soundcloud.com/kennedyjones/gramatikkennedyjones";
// var trackPermalinkUrl = "https://soundcloud.com/pum818pkin/agustin-barrios-julia-florida-barcarola-20160924";
var clientParameter = "client_id=eab076c133468510a6efbe8ca1390e96"

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

function findTrack() {
  get("https://api.soundcloud.com/resolve.json?url=" +  trackPermalinkUrl + "&" + clientParameter,
    function (response) {
      trackInfo = JSON.parse(response);

      // console.log(trackInfo, trackInfo.stream_url);

      // slider.max = trackInfo.duration / 1000;
      // document.getElementById("totalTime").innerHTML = millisecondsToHuman(trackInfo.duration);
      // document.getElementById("artistUrl").href = trackInfo.user.permalink_url;
      // document.getElementById("artistAvatar").src = trackInfo.user.avatar_url;
      // document.getElementById("artistName").innerHTML = trackInfo.user.username;
      // document.getElementById("trackUrl").href = trackInfo.permalink_url;
      // soundUrl = "'" + trackInfo.stream_url + "'";

      // function preload() {
      //   sound = loadSound(streamUrl);
      // }
      // console.log(streamUrl);

      // preload();
      // if(trackInfo.stream_url) {
        // document.getElementById("trackArt").src = trackInfo.artwork_url;
      // } else {
        // document.getElementById("trackArt").src = "";
      // }
      // document.getElementById("trackName").innerHTML = trackInfo.title;
      streamUrl = "'" + trackInfo.stream_url + "?" + clientParameter + "'";
      // audioLoaded();
      console.log(streamUrl);
  });
};
// findTrack();
// console.log(findTrack(), 'teste');

// preload();
function preload() {
  // sound = loadSound(streamUrl);
  // sound = loadSound(findTrack());
  // sound = loadSound('audio/song01.mp3');
}
