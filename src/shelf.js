
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(bookTitle, shelf){
  if (shelf.length < 3){
  shelf.unshift(bookTitle)}
  return shelf
}

function unshelfBook(bookTitle, shelf){
  for (i = 0; i < shelf.length; i++){
    if (shelf[i].title === bookTitle){
    shelf.splice(i, 1)
    }
   }
   return shelf
}

function listTitles(shelf){
  var list = []
  for (i = 0; i <shelf.length; i++){
    list.push(shelf[i].title)
  }
  var titles = list.join(", ")
  return titles
} 


function searchShelf(shelf, bookTitle){
      for (i = 0; i < shelf.length; i++){
        if (shelf[i].title.includes(bookTitle)){
          return true 
        }
      }
      return false
    }