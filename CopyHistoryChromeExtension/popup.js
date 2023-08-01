document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.getBackgroundPage(function (backgroundPage) {
    var clipboardItems = backgroundPage.getClipboardItems();
    var clipboardItemsDiv = document.getElementById("clipboardItems");

    clipboardItems.forEach(function (item) {
      var itemDiv = document.createElement("div");
      itemDiv.textContent = item;
      clipboardItemsDiv.appendChild(itemDiv);
    });
  });
});
