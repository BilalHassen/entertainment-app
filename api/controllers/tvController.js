const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

async function getTvShows(req, res) {
  const userId = req.user?.id;

  try {
    const tvResponse = await knex("movies")
      .leftJoin("bookmarks", function () {
        this.on("movies.id", "=", "bookmarks.movie_id")
            .andOn("bookmarks.user_id", "=", knex.raw("?", [userId]));
      })
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.category", "=", "TV Series")
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_trending",
        "movies.is_recommended",
        knex.raw("CASE WHEN bookmarks.id IS NOT NULL THEN true ELSE false END AS is_bookmarked"),
        "thumbnails.url"
      );

    const formattedTvShows = collectDuplicateThumbnails(tvResponse);
    res.status(200).json(formattedTvShows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getTvShows,
};
