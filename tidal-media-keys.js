chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // f7 -> 118
    // f8 -> 119
    // f9 -> 120
    if (request.mediaKeyPressed == 118) {
      document.querySelector('.play-controls__previous').click()
    }
    if (request.mediaKeyPressed == 119) {
      document.querySelector('.play-controls__play').click()
    }
    if (request.mediaKeyPressed == 120) {
      document.querySelector('.play-controls__next').click()
    }
  });
