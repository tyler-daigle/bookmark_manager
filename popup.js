document
  .querySelector("#bookmark-button")
  .addEventListener("click", function () {
    chrome.bookmarks.getTree(function (tree) {
      showBookmarks(tree);
    });
  });

document
  .querySelector("#details-button")
  .addEventListener("click", function (e) {
    window.open(chrome.runtime.getURL("./details.html"));
  });
// Traverse through the bookmarks tree. If the item has a children property it
// will recursively call the function again.
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

// TODO: sort the bookmarks by year. Create a page that displays all the bookmarks by year. Options page?
