// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let directorList = [];
  directorList = movies.map(movie => movie.director);

  console.log("EXERCICE 1 ->", directorList);
  return directorList;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let moviesDirector = [];
  moviesDirector = movies.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {  
  let moviesAverageOfDirector = 0;
  moviesDirector = getMoviesFromDirector(movies, director);
  moviesAverageOfDirector = moviesDirector.reduce((total, movie) => (total + movie.score / moviesDirector.length), 0);
  return moviesAverageOfDirector;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesSortAlpabetically =  movies.map(movie => movie.title);  
  const top20Titles = moviesSortAlpabetically.sort();
  return top20Titles.slice(0, 20);
  
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesWithYear = movies.map(movie => ({ year: movie.year, title: movie.title })); // Extraer los años y títulos
  const moviesOrderByYear = moviesWithYear.sort((a, b) => a.year - b.year);               // Ordenar por año
  return [moviesOrderByYear[0]];                  // Devolver el array con un solo elemento (el objeto ordenado)
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
