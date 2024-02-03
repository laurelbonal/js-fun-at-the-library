

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


function addBook(libraryName, bookName){
     libraryName.shelves[bookName.genre].push(bookName) 

    // for (i = 0; i < libraryName.shelves.length; i++){
    //   if (libraryName.shelves.includes(bookName.genre)){
    //     libraryName.shelves[i].push(bookName)
    //   }
    // }
    // return libraryName.shelves
    // console.log("sanity check", libraryName.shelves[0])
}

function checkoutBook(){
  
}