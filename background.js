chrome.action.onClicked.addListener(e=>{chrome.tabs.update(e.id,{url:chrome.runtime.getURL("index.html"),active:!0})});
