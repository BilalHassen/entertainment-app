const { getRounds } = require("bcrypt");

const knex = require("knex")(require("../knexfile"));

async function getTrendingVideos(req, res) {
  try {
    const trendingVideos = await knex("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_trending", "=", "true")
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
    const existingMovie = {};

    trendingVideos.forEach((video) => {
      const { id, title, year, category, rating, is_bookmarked, is_trending } =
        video;
      // check existingMovie has key = video.id
      if (existingMovie[video.id]) {
        // assume the key has an array as a value and push the url to it
        existingMovie[video.id].url.push(video.url);
      } else {
        {
          /* 
      if it doenst exist create an object within the 
      existingMovies object the key will be the id 
      and its value will be an object with the below 
      key value pairs
      */
        }
        existingMovie[video.id] = {
          id,
          title,
          year,
          category,
          rating,
          is_bookmarked,
          is_trending,
          url: [video.url],
        };
      }
    });

    console.log(existingMovie);

    const result = Object.values(existingMovie);

    res.status(200).json(result);
  } catch (error) {
    console.log(`${error}: something went wrong`);
  }
}

// use node module to export this function into other files

module.exports = {
  getTrendingVideos,
};
