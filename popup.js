document
  .querySelector("#bookmark-button")
  .addEventListener("click", function () {
    chrome.bookmarks.getTree(function (tree) {
      showBookmarks(tree);
    });
  });

function showBookmarks(tree) {
  tree.forEach(function (bookmarkItem) {
    if (bookmarkItem.children) {
      showBookmarks(bookmarkItem.children);
    } else {
      showBookmarkData(bookmarkItem);
    }
  });
}

function showBookmarkData(bookmark) {
  const date = new Date(bookmark.dateAdded).toString();
  console.log(`Title: ${bookmark.title} Date Added: ${date}`);
}
