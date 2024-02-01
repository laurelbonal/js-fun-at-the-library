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
  allReviews = []
  allReviews.push(criticReviews)
 return allReviews

}
 


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}