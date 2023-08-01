var clipboardHistory = [];

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "saveToClipboardHistory",
    title: "Save to Clipboard History",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "saveToClipboardHistory") {
    var text = info.selectionText;
    clipboardHistory.unshift(text);
    clipboardHistory = clipboardHistory.slice(0, 10); // Limit history to 10 items

    chrome.storage.local.set({ clipboardHistory: clipboardHistory });
  }
});

function getClipboardItems() {
  return clipboardHistory;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getClipboardItems") {
    sendResponse({ clipboardItems: clipboardHistory });
  }
});
