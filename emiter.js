(function() {
  document.addEventListener('keydown', function(e){
    chrome.runtime.sendMessage({mediaKeyPressed: e.which})
  })
}())