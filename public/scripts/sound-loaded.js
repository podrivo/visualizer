
function soundLoaded() {

  if ( sound.isLoaded() ) {

    var loading = document.getElementById('loading');
    var loaded = document.getElementById('loaded');
    loading.classList.remove("on");
    loaded.classList.add("on");

    console.log('loaded');
  }
};
