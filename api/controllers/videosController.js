const { getRounds } = require("bcrypt");

const knex = require("knex")(require("../knexfile"));

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

    const existingVideos = {};

    recommendedVideos.forEach((video) => {
      // get data from video object
      const {
        id,
        title,
        year,
        category,
        rating,
        is_bookmarked,
        is_recommended,
        url,
      } = video;

      // check the existing video object for each item in this array
      if (existingVideos[video.id]) {
        // access the key being the video id and then the url inside
        // the value of this key and since its an array push
        // the video url to the array
        existingVideos[video.id].url.push(video.url);
      } else {
        // create a key with the id and the value being this
        // entire object
        existingVideos[video.id] = {
          id,
          title,
          year,
          category,
          rating,
          is_bookmarked,
          is_recommended,
          url: [video.url],
        };
      }
    });
    // extract values of the existing videos object
    // and return an array
    const formattedResult = Object.values(existingVideos);

    res.status(200).json(formattedResult);
  } catch (error) {
    res.status(500).json();
  }
}

// use node module to export this function into other files

module.exports = {
  getTrendingVideos,
  getRecommendedVideos,
};
