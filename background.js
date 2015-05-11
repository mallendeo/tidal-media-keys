chrome.extension.onMessage.addListener(function(details) {
  chrome.tabs.query({
    url: "*://*.tidalhifi.com/**"
  }, function(result) {
    if (result.length === 1) {
    var tab = result[0]
      chrome.tabs.sendMessage(tab.id, details)
    }
  })
})