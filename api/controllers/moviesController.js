const knex = require("knex")(require("../knexfile"));
console.log(knex);

async function getMovies(req, res) {
  try {
    const moviesResponse = await knex("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.category", "=", "Movie")
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_bookmarked",
        "movies.is_trending",
        "movies.is_recommended",
        "thumbnails.url"
      );

    const existingMovie = {};

    moviesResponse.forEach((movie) => {
      const {
        title,
        year,
        category,
        rating,
        is_bookmarked,
        is_trending,
        is_recommended,
      } = movie;
      if (existingMovie[movie.id]) {
        existingMovie[movie.id].url.push(movie.url);
      } else {
        existingMovie[movie.id] = {
          title,
          year,
          category,
          rating,
          is_bookmarked,
          is_trending,
          is_recommended,
          url: [movie.url],
        };
      }
    });

    const moviesArray = Object.values(existingMovie);
    res.status(200).json(moviesArray);
  } catch (err) {
    res.status(500).json(`LoL an error occured ${err}`);
  }
}

module.exports = {
  getMovies,
};
