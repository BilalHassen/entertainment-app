const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

async function getTrendingVideos(req, res) {
  try {
    const trendingVideos = await knex("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_trending", "=", true)
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_bookmarked",
        "movies.is_trending",
        "thumbnails.url"
      );
    const formattedTrendingVideos = collectDuplicateThumbnails(trendingVideos);

    res.status(200).json(formattedTrendingVideos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getRecommendedVideos(req, res) {
  try {
    const recommendedVideos = await knex("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_recommended", "=", true)
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_bookmarked",
        "movies.is_recommended",
        "thumbnails.url"
      );

    console.log(recommendedVideos);

    const formattedRecommendedVideos =
      collectDuplicateThumbnails(recommendedVideos);

    res.status(200).json(formattedRecommendedVideos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// use node module to export this function into other files

module.exports = {
  getTrendingVideos,
  getRecommendedVideos,
};
