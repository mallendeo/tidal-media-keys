chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // f7 -> 118
    // f8 -> 119
    // f9 -> 120
    var prevBtn = document.querySelector('.play-controls__previous')
    var playBtn = document.querySelector('.play-controls__play')
    var pauseBtn = document.querySelector('.play-controls__pause')
    var nextBtn = document.querySelector('.play-controls__next')
    if (request.mediaKeyPressed == 118) {
      prevBtn.click()
    }
    if (request.mediaKeyPressed == 119) {
      var style = window.getComputedStyle(playBtn),
          display = style.getPropertyValue('display')

      if (display === 'none') {
        pauseBtn.click()
        return
      }

      playBtn.click()
    }

    if (request.mediaKeyPressed == 120) {
      nextBtn.click()
    }
  })
