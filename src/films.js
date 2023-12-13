// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {

    let directorList = [];

    // Extraemos el director   
    directorList = movies.map(movie => movie.director);

    console.log("EXERCICE 1 ->", directorList);
    return directorList;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

    let moviesDirector = [];

    // Filtramos por el director
    moviesDirector = movies.filter(movie => movie.director === director);
    console.log("EXERCICE 2 ->", moviesDirector);
    return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) { 
    
    let moviesAverageOfDirector = 0;
    
    //  Extraemos las películas por el director  
    moviesDirector = getMoviesFromDirector(movies, director);

    // Cáculo de la media de puntuación de las películas
    moviesAverageOfDirector = moviesDirector.reduce((total, movie) => (total + movie.score / moviesDirector.length), 0);
    return moviesAverageOfDirector;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

    // Extraemos los títulos
    const moviesSortAlpabetically =  movies.map(movie => movie.title);
    
    // Ordenamos alfabéticamente
    const top20Titles = moviesSortAlpabetically.sort();

    // Devolvemos las 20 primeras películas
    return top20Titles.slice(0, 20);     
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

    // Extraemos los años y títulos
    const moviesWithYear = movies.map(movie => ({ year: movie.year, title: movie.title }));

    // Ordenamos por año de forma ascendente y luego por título alfabéticamente
    const moviesOrderByYear = moviesWithYear.sort((a, b) => {
    if (a.year !== b.year) {
        return a.year - b.year;
    } else {
        return a.title.localeCompare(b.title);
    }
    });

    // Devolvemos el array ordenado
    return moviesOrderByYear;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
        // Filtrar las películas por la categoría específica
        const filteredMovies = movies.filter(movie => movie.genre.includes(category));
    
        // Calcular la nota media de las películas de la categoría
        if (filteredMovies.length === 0) {
        return 0; // Si no hay películas en la categoría, la nota media es 0
        }
    
        const totalScore = filteredMovies.reduce((sum, movie) => sum + movie.score, 0);
        const averageScore = totalScore / filteredMovies.length;
    
        // Redondear la nota media a dos decimales
        return parseFloat(averageScore.toFixed(2));
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
