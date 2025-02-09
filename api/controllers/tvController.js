const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

async function getTvShows(req, res) {
  try {
    const tvResponse = await knex("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.category", "=", "TV Series")
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

    const formattedTvShows = collectDuplicateThumbnails(tvResponse);
    res.status(200).json(formattedTvShows);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getTvShows,
};
