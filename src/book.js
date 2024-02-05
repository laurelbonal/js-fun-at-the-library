function createTitle(title) {
  var bookIdea = `The ${title}`
  return bookIdea
}

function buildMainCharacter(name, age, pronouns) { 
  var character = {
    name: name,
    age: age, 
    pronouns: pronouns
  } 
  return character
}


function saveReview(criticReviews, allReviews) {
    if(!allReviews.includes(criticReviews)){
      allReviews.push(criticReviews)
    }
    return allReviews
}
 
function calculatePageCount(bookTitle) {
    var bookPageCount = bookTitle.length * 20
    return bookPageCount
}

function writeBook(bookTitle, character, genre){
  var book = {
    title: bookTitle,
    mainCharacter: character,
    pageCount: bookTitle.length * 20,
    genre: genre
  }
  return book
}


function editBook(bookObject){
  var newPageCount = bookObject.pageCount * .75
  bookObject.pageCount = newPageCount
  return bookObject
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}