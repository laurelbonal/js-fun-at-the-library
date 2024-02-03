

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};

function createLibrary(libraryName){
  library = {
  name: libraryName,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: []
  }
  }
  return library
}


function addBook(libraryName, book){
     libraryName.shelves[book.genre].push(book) 
}

function checkoutBook(libraryName, book){
  // if book title is on shelf
  // if title is on shelf, find index
  // remove index of book on shelf
  
 
      for (i = 0; i < libraryName.shelves.length; i++){
        var stuff = libraryName.shelves.find(o => o.genre[book] === book)
    //     for (x = 0; x < i.length; x++){
    //       x.
    //     }
    //     if (libraryName.shelves[i].find(o => o.book === book)){
    //       var bookIndex = libraryName.shelves[i].indexOf(book)
    //       libraryName.shelves[book.genre].splice(bookIndex, 1)
    //       return `You have now checked out ${book} from the ${libraryName}.`
    //     }
    //   }
    //   return "sorry we dont have that book right now"
    }

  