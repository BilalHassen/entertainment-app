const knex = require("knex")(require("../knexfile"));
const {
  collectDuplicateThumbnails,
} = require("../helper/collectDuplicateThumbnails");

async function getBookmarkVideos(req, res) {
  const userId = req.user.id;

  console.log("USER ID:", userId);

  try {
    const bookmarkResponse = await knex("bookmarks")
      .where("bookmarks.user_id", "=", userId)
      .join("movies", "bookmarks.movie_id", "=", "movies.id")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
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
    const existingVideo = await knex("bookmarks")
      .where({
        user_id: userId,
        movie_id: videoId,
      })
      .first();

    if (existingVideo) {
      return res.status(200).json({ message: "Already bookmarked." });
    }
    const insertVideo = await knex("bookmarks")
      .where("user_id", "=", userId)
      .insert({ user_id: userId, movie_id: videoId, is_bookmarked: true });

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
