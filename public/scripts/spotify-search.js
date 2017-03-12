//
//
//
//
//
// function searchLibrary(query) {
//   //if the result is cached, return it.
//   searchLibrary.cache = searchLibrary.cache || {};
//   if (searchLibrary.cache[encodeURIComponent(query)]) {
//     return writeResults(searchLibrary.cache[encodeURIComponent(query)]);
//   }
//   //otherwise create an ajax promise
//   makeNetworkRequest(query).then(function(response) {
//     searchLibrary.cache[encodeURIComponent(query)] = response;
//     writeResults(response);
//   }, function(e) {
//     console.error(e)
//   });
//
// }
//
//
//
//
//
// function writeResults(results) {
//   var output = document.getElementById("results");
//   output.innerHTML = "";
//
//   for (var resultType in JSON.parse(results)) {
//     var items = JSON.parse(results)[resultType].items;
//     var update = new resultList(resultType, items).render();
//     var domElement = document.getElementsByClassName(resultType);
//     output.appendChild(update);
//   }
// }
//
//
//
//
//
// function makeNetworkRequest(query) {
//   return new Promise(function(resolve, reject) {
//     var API_URL = "https://api.spotify.com/v1/search?limit=3&type=artist&q=" + encodeURI(query);
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         resolve(xhr.responseText);
//       }
//     }
//     xhr.onerror = function() {
//       reject(new Error("network error"))
//     }
//     xhr.open("GET", API_URL, true);
//     xhr.send();
//   });
// }
//
//
//
//
//
// function listItem() {
//   this.render = function() {
//     var li = document.createElement("li");
//     var divImage = document.createElement("figure");
//     var divImageWrap = document.createElement("div");
//     var divDesc = document.createElement("div");
//     var img = document.createElement("img");
//     var title = document.createElement("p");
//     // var subtitle = document.createElement("p");
//     var anchor = document.createElement("a");
//     var imgAnchor = document.createElement("a");
//     img.src = this.src === 0 ? "http://samratcliffe.github.io/images/placeholder.jpg" : this.src;
//     anchor.href = imgAnchor.href = this.href;
//     anchor.target = imgAnchor.target = "_blank";
//     title.classList.add("item-title");
//     // subtitle.classList.add("item-subtitle");
//     title.innerHTML = this.title;
//     // subtitle.innerHTML = this.subtitle;
//     imgAnchor.appendChild(img);
//     divImageWrap.appendChild(imgAnchor);
//     divDesc.appendChild(title);
//     // divDesc.appendChild(subtitle);
//     divDesc.appendChild(anchor);
//     divImage.appendChild(divImageWrap);
//     li.appendChild(divImage);
//     li.appendChild(divDesc);
//     return li;
//   }
// }
//
//
//
//
//
// function resultListItem(resultItem) {
//   this.title = "<a target='_blank' href='" + resultItem.external_urls.spotify + "'>" + (resultItem.name.length > 45 ? resultItem.name.substr(0, 45) + "…" : resultItem.name) + "</a>";
//   this.href = resultItem.external_urls.spotify;
//   switch (resultItem.type) {
//     case "artist":
//       this.subtitle = Number(resultItem.followers.total).toLocaleString() + " listeners";
//       this.src = resultItem.images.length && resultItem.images.slice(-1)[0].url;
//       break;
//     case "album":
//       this.subtitle = resultItem.album_type;
//       this.src = resultItem.images.length && resultItem.images.slice(1)[0].url;
//       break;
//     case "track":
//       this.subtitle = "<a target='_blank'  href='" + resultItem.artists[0].external_urls.spotify + "'>" + resultItem.artists[0].name + "</a>" + " • " + "<a target='_blank' href='" + resultItem.album.external_urls.spotify + "'>" + resultItem.album.name + "</a>";
//       this.src = resultItem.album.images.length && resultItem.album.images.slice(-1)[0].url;
//       break;
//     case "playlist":
//       this.subtitle = resultItem.type;
//       this.src = 0;
//       break;
//     default:
//       this.subtitle = resultItem.type;
//       break;
//   }
// }
// resultListItem.prototype = new listItem();
//
//
//
//
//
// function resultList(name, results) {
//   this.name = name;
//   this.results = results;
//   //render
//   this.render = function() {
//     var ul = document.createElement("ul");
//     var headerWrap = document.createElement("div");
//     var titleWrap = document.createElement("div");
//     // var showMoreWrap = document.createElement("div");
//     titleWrap.classList.add("title-wrap");
//     // showMoreWrap.classList.add("show-more-wrap");
//     ul.classList.add(this.name);
//     var showMore = document.createElement("a");
//     // showMore.innerHTML = "SHOW MORE";
//     showMore.href = "javascript:void(0)";
//     var header = document.createElement("p");
//     header.innerHTML = this.name;
//     titleWrap.appendChild(header);
//     // showMoreWrap.appendChild(showMore);
//     headerWrap.appendChild(titleWrap);
//     // headerWrap.appendChild(showMoreWrap);
//     ul.appendChild(headerWrap)
//     this.results.map(function(item) {
//       var li = new resultListItem(item);
//       ul.appendChild(li.render());
//     });
//     return ul;
//   }
// }
//
//
//
//
//
// var search = document.getElementsByClassName("query-input")[0];
//
// search.addEventListener("keyup", function(e) {
//   var query = e.target.value;
//   var results = document.getElementById("results");
//   // results.classList = query === "" ? "" : "active";
//   searchLibrary(query);
// });
// search.addEventListener("focus", function(e) {
//   var main = document.getElementsByClassName("main")[0];
//   // main.classList = "main";
// });
//
//
//
//
//
// //cancel on X click or ESC
// // var cancel = document.getElementsByClassName("cancel")[0];
// // cancel.addEventListener("click", cancelInput);
//
// document.onkeydown = function(e) {
//   e = e || window.event;
//   var isEscape = false;
//   if ("key" in e) {
//     isEscape = e.key == "Escape";
//   } else {
//     isEscape = e.keyCode == 27;
//   }
//   if (isEscape) cancelInput();
// };
//
//
//
//
//
// function cancelInput() {
//   var main = document.getElementsByClassName("main")[0];
//   main.classList.add("inactive");
//   search.value = '';
//   document.getElementById("results").classList = "";
//   search.blur();
// }
