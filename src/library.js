

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
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

function checkoutBook(libraryName, book, genre){
      for (i = 0; i < libraryName.shelves[genre].length; i++){
        var title = libraryName.shelves[genre][i].title
        if (title === book) {
          library.shelves[genre].splice(i, 1);
      } 
        return `You have now checked out ${book} from the ${libraryName.name}.`
      }
      return `Sorry, there are currently no copies of ${book} available at the ${libraryName.name}.`
    }


    function takeStock(libraryName, genre){
      if (genre === undefined){
        var allBooks = 0
        var arrayValues = Object.values(libraryName.shelves);
    for (let i = 0; i < arrayValues.length; i++) {
      allBooks += arrayValues[i].length;
    }
        return `There are a total of ${allBooks} books at the ${libraryName.name}.`
      }
      var shelfStock = 0
      for (i = 0; i < libraryName.shelves[genre].length; i++){
        shelfStock += libraryName.shelves[genre].length
        return `There are a total of ${shelfStock} ${genre} books at the ${libraryName.name}.`
      }
    }
  