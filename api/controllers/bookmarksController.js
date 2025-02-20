const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

async function getBookmarkVideos(req, res) {
  try {
    const bookmarkResponse = await knex("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_bookmarked", "=", true)
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

    const formattedBookmarkVideos =
      collectDuplicateThumbnails(bookmarkResponse);
    res.status(200).json(formattedBookmarkVideos);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function bookMarkVideo(req, res) {
  const { userId, videoId } = req.body;
  try {
    const insertVideo = await knex("bookmarks")
      .where("user_id", "=", userId)
      .insert({ user_id: userId, movie_id: videoId });

    console.log("VIDEO ADDED", insertVideo);
    res.status(201).json({ message: "BookMarked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured" });
  }
}

module.exports = {
  getBookmarkVideos,
  bookMarkVideo,
};
