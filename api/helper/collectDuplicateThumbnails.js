function collectDuplicateThumbnails(videos) {
  const existingVideo = {};

  videos.forEach((video) => {
    const {
      title,
      year,
      category,
      rating,
      is_bookmarked,
      is_trending,
      is_recommended,
    } = video;
    // check the existing video object for each item in this array
    if (existingVideo[video.id]) {
      // access the key being the video id and then the url inside
      // the value of this key and since its an array push
      // the video url to the array
      existingVideo[video.id].url.push(video.url);
    } else {
      // create a key with the id and the value being this
      // entire object
      existingVideo[video.id] = {
        title,
        year,
        category,
        rating,
        is_bookmarked,
        is_trending,
        is_recommended,
        url: [video.url],
      };
    }
  });
  // extract values of the existing videos object
  // and return an array
  const videosArray = Object.values(existingVideo);
  return videosArray;
}

module.exports = { collectDuplicateThumbnails };
