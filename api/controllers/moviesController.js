const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

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

    const formattedMovies = collectDuplicateThumbnails(moviesResponse);
    res.status(200).json(formattedMovies);
  } catch (err) {
    res.status(500).json(`LoL an error occured ${err}`);
  }
}

module.exports = {
  getMovies,
};
