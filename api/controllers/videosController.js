const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

async function getTrendingVideos(req, res) {
  const userId = req.user?.id;

  try {
    const trendingVideos = await knex("movies")
      .leftJoin("bookmarks", function () {
        this.on("movies.id", "=", "bookmarks.movie_id")
            .andOn("bookmarks.user_id", "=", knex.raw("?", [userId]));
      })
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_trending", "=", true)
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_trending",
        "thumbnails.url",
        knex.raw("CASE WHEN bookmarks.id IS NOT NULL THEN true ELSE false END AS is_bookmarked")
      );

    const formattedTrendingVideos = collectDuplicateThumbnails(trendingVideos);
    res.status(200).json(formattedTrendingVideos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getRecommendedVideos(req, res) {
  const userId = req.user?.id;

  try {
    const recommendedVideos = await knex("movies")
      .leftJoin("bookmarks", function () {
        this.on("movies.id", "=", "bookmarks.movie_id")
            .andOn("bookmarks.user_id", "=", knex.raw("?", [userId]));
      })
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_recommended", "=", true)
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_recommended",
        "thumbnails.url",
        knex.raw("CASE WHEN bookmarks.id IS NOT NULL THEN true ELSE false END AS is_bookmarked")
      );

    const formattedRecommendedVideos =
      collectDuplicateThumbnails(recommendedVideos);

    res.status(200).json(formattedRecommendedVideos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getTrendingVideos,
  getRecommendedVideos,
};
