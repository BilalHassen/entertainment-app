exports.seed = async function (knex) {
  // Base URL for your Supabase Storage
  const baseURL =
    "https://psrrjvmqdiqfghqrgnnm.supabase.co/storage/v1/object/public/media-thumbnails/thumbnails";

  await knex("thumbnails").insert([
    // Beyond Earth (movie_id: 1)
    {
      movie_id: 1,
      type: "trending",
      size: "small",
      url: `${baseURL}/beyond-earth/trending/small.jpg`,
    },
    {
      movie_id: 1,
      type: "trending",
      size: "large",
      url: `${baseURL}/beyond-earth/trending/large.jpg`,
    },
    {
      movie_id: 1,
      type: "regular",
      size: "small",
      url: `${baseURL}/beyond-earth/regular/small.jpg`,
    },
    {
      movie_id: 1,
      type: "regular",
      size: "medium",
      url: `${baseURL}/beyond-earth/regular/medium.jpg`,
    },
    {
      movie_id: 1,
      type: "regular",
      size: "large",
      url: `${baseURL}/beyond-earth/regular/large.jpg`,
    },

    // Bottom Gear (movie_id: 2)
    {
      movie_id: 2,
      type: "trending",
      size: "small",
      url: `${baseURL}/bottom-gear/trending/small.jpg`,
    },
    {
      movie_id: 2,
      type: "trending",
      size: "large",
      url: `${baseURL}/bottom-gear/trending/large.jpg`,
    },
    {
      movie_id: 2,
      type: "regular",
      size: "small",
      url: `${baseURL}/bottom-gear/regular/small.jpg`,
    },
    {
      movie_id: 2,
      type: "regular",
      size: "medium",
      url: `${baseURL}/bottom-gear/regular/medium.jpg`,
    },
    {
      movie_id: 2,
      type: "regular",
      size: "large",
      url: `${baseURL}/bottom-gear/regular/large.jpg`,
    },

    // Undiscovered Cities (movie_id: 3)
    {
      movie_id: 3,
      type: "trending",
      size: "small",
      url: `${baseURL}/undiscovered-cities/trending/small.jpg`,
    },
    {
      movie_id: 3,
      type: "trending",
      size: "large",
      url: `${baseURL}/undiscovered-cities/trending/large.jpg`,
    },
    {
      movie_id: 3,
      type: "regular",
      size: "small",
      url: `${baseURL}/undiscovered-cities/regular/small.jpg`,
    },
    {
      movie_id: 3,
      type: "regular",
      size: "medium",
      url: `${baseURL}/undiscovered-cities/regular/medium.jpg`,
    },
    {
      movie_id: 3,
      type: "regular",
      size: "large",
      url: `${baseURL}/undiscovered-cities/regular/large.jpg`,
    },

    // 1998 (movie_id: 4)
    {
      movie_id: 4,
      type: "trending",
      size: "small",
      url: `${baseURL}/1998/trending/small.jpg`,
    },
    {
      movie_id: 4,
      type: "trending",
      size: "large",
      url: `${baseURL}/1998/trending/large.jpg`,
    },
    {
      movie_id: 4,
      type: "regular",
      size: "small",
      url: `${baseURL}/1998/regular/small.jpg`,
    },
    {
      movie_id: 4,
      type: "regular",
      size: "medium",
      url: `${baseURL}/1998/regular/medium.jpg`,
    },
    {
      movie_id: 4,
      type: "regular",
      size: "large",
      url: `${baseURL}/1998/regular/large.jpg`,
    },

    // Dark Side of the Moon (movie_id: 5)
    {
      movie_id: 5,
      type: "trending",
      size: "small",
      url: `${baseURL}/dark-side-of-the-moon/trending/small.jpg`,
    },
    {
      movie_id: 5,
      type: "trending",
      size: "large",
      url: `${baseURL}/dark-side-of-the-moon/trending/large.jpg`,
    },
    {
      movie_id: 5,
      type: "regular",
      size: "small",
      url: `${baseURL}/dark-side-of-the-moon/regular/small.jpg`,
    },
    {
      movie_id: 5,
      type: "regular",
      size: "medium",
      url: `${baseURL}/dark-side-of-the-moon/regular/medium.jpg`,
    },
    {
      movie_id: 5,
      type: "regular",
      size: "large",
      url: `${baseURL}/dark-side-of-the-moon/regular/large.jpg`,
    },

    // The Great Lands (movie_id: 6)
    {
      movie_id: 6,
      type: "regular",
      size: "small",
      url: `${baseURL}/the-great-lands/regular/small.jpg`,
    },
    {
      movie_id: 6,
      type: "regular",
      size: "medium",
      url: `${baseURL}/the-great-lands/regular/medium.jpg`,
    },
    {
      movie_id: 6,
      type: "regular",
      size: "large",
      url: `${baseURL}/the-great-lands/regular/large.jpg`,
    },

    // The Diary (movie_id: 7)
    {
      movie_id: 7,
      type: "regular",
      size: "small",
      url: `${baseURL}/the-diary/regular/small.jpg`,
    },
    {
      movie_id: 7,
      type: "regular",
      size: "medium",
      url: `${baseURL}/the-diary/regular/medium.jpg`,
    },
    {
      movie_id: 7,
      type: "regular",
      size: "large",
      url: `${baseURL}/the-diary/regular/large.jpg`,
    },

    // Earth’s Untouched (movie_id: 8)
    {
      movie_id: 8,
      type: "regular",
      size: "small",
      url: `${baseURL}/earths-untouched/regular/small.jpg`,
    },
    {
      movie_id: 8,
      type: "regular",
      size: "medium",
      url: `${baseURL}/earths-untouched/regular/medium.jpg`,
    },
    {
      movie_id: 8,
      type: "regular",
      size: "large",
      url: `${baseURL}/earths-untouched/regular/large.jpg`,
    },

    // No Land Beyond (movie_id: 9)
    {
      movie_id: 9,
      type: "regular",
      size: "small",
      url: `${baseURL}/no-land-beyond/regular/small.jpg`,
    },
    {
      movie_id: 9,
      type: "regular",
      size: "medium",
      url: `${baseURL}/no-land-beyond/regular/medium.jpg`,
    },
    {
      movie_id: 9,
      type: "regular",
      size: "large",
      url: `${baseURL}/no-land-beyond/regular/large.jpg`,
    },

    // During the Hunt (movie_id: 10)
    {
      movie_id: 10,
      type: "regular",
      size: "small",
      url: `${baseURL}/during-the-hunt/regular/small.jpg`,
    },
    {
      movie_id: 10,
      type: "regular",
      size: "medium",
      url: `${baseURL}/during-the-hunt/regular/medium.jpg`,
    },
    {
      movie_id: 10,
      type: "regular",
      size: "large",
      url: `${baseURL}/during-the-hunt/regular/large.jpg`,
    },

    // Autosport the Series (movie_id: 11)
    {
      movie_id: 11,
      type: "regular",
      size: "small",
      url: `${baseURL}/autosport-the-series/regular/small.jpg`,
    },
    {
      movie_id: 11,
      type: "regular",
      size: "medium",
      url: `${baseURL}/autosport-the-series/regular/medium.jpg`,
    },
    {
      movie_id: 11,
      type: "regular",
      size: "large",
      url: `${baseURL}/autosport-the-series/regular/large.jpg`,
    },

    // Same Answer II (movie_id: 12)
    {
      movie_id: 12,
      type: "regular",
      size: "small",
      url: `${baseURL}/same-answer-2/regular/small.jpg`,
    },
    {
      movie_id: 12,
      type: "regular",
      size: "medium",
      url: `${baseURL}/same-answer-2/regular/medium.jpg`,
    },
    {
      movie_id: 12,
      type: "regular",
      size: "large",
      url: `${baseURL}/same-answer-2/regular/large.jpg`,
    },

    // Below Echo (movie_id: 13)
    {
      movie_id: 13,
      type: "regular",
      size: "small",
      url: `${baseURL}/below-echo/regular/small.jpg`,
    },
    {
      movie_id: 13,
      type: "regular",
      size: "medium",
      url: `${baseURL}/below-echo/regular/medium.jpg`,
    },
    {
      movie_id: 13,
      type: "regular",
      size: "large",
      url: `${baseURL}/below-echo/regular/large.jpg`,
    },

    // The Rockies (movie_id: 14)
    {
      movie_id: 14,
      type: "regular",
      size: "small",
      url: `${baseURL}/the-rockies/regular/small.jpg`,
    },
    {
      movie_id: 14,
      type: "regular",
      size: "medium",
      url: `${baseURL}/the-rockies/regular/medium.jpg`,
    },
    {
      movie_id: 14,
      type: "regular",
      size: "large",
      url: `${baseURL}/the-rockies/regular/large.jpg`,
    },

    // Relentless (movie_id: 15)
    {
      movie_id: 15,
      type: "regular",
      size: "small",
      url: `${baseURL}/relentless/regular/small.jpg`,
    },
    {
      movie_id: 15,
      type: "regular",
      size: "medium",
      url: `${baseURL}/relentless/regular/medium.jpg`,
    },
    {
      movie_id: 15,
      type: "regular",
      size: "large",
      url: `${baseURL}/relentless/regular/large.jpg`,
    },

    // Community of Ours (movie_id: 16)
    {
      movie_id: 16,
      type: "regular",
      size: "small",
      url: `${baseURL}/community-of-ours/regular/small.jpg`,
    },
    {
      movie_id: 16,
      type: "regular",
      size: "medium",
      url: `${baseURL}/community-of-ours/regular/medium.jpg`,
    },
    {
      movie_id: 16,
      type: "regular",
      size: "large",
      url: `${baseURL}/community-of-ours/regular/large.jpg`,
    },

    // Van Life (movie_id: 17)
    {
      movie_id: 17,
      type: "regular",
      size: "small",
      url: `${baseURL}/van-life/regular/small.jpg`,
    },
    {
      movie_id: 17,
      type: "regular",
      size: "medium",
      url: `${baseURL}/van-life/regular/medium.jpg`,
    },
    {
      movie_id: 17,
      type: "regular",
      size: "large",
      url: `${baseURL}/van-life/regular/large.jpg`,
    },

    // The Heiress (movie_id: 18)
    {
      movie_id: 18,
      type: "regular",
      size: "small",
      url: `${baseURL}/the-heiress/regular/small.jpg`,
    },
    {
      movie_id: 18,
      type: "regular",
      size: "medium",
      url: `${baseURL}/the-heiress/regular/medium.jpg`,
    },
    {
      movie_id: 18,
      type: "regular",
      size: "large",
      url: `${baseURL}/the-heiress/regular/large.jpg`,
    },

    // Off the Track (movie_id: 19)
    {
      movie_id: 19,
      type: "regular",
      size: "small",
      url: `${baseURL}/off-the-track/regular/small.jpg`,
    },
    {
      movie_id: 19,
      type: "regular",
      size: "medium",
      url: `${baseURL}/off-the-track/regular/medium.jpg`,
    },
    {
      movie_id: 19,
      type: "regular",
      size: "large",
      url: `${baseURL}/off-the-track/regular/large.jpg`,
    },

    // Whispering Hill (movie_id: 20)
    {
      movie_id: 20,
      type: "regular",
      size: "small",
      url: `${baseURL}/whispering-hill/regular/small.jpg`,
    },
    {
      movie_id: 20,
      type: "regular",
      size: "medium",
      url: `${baseURL}/whispering-hill/regular/medium.jpg`,
    },
    {
      movie_id: 20,
      type: "regular",
      size: "large",
      url: `${baseURL}/whispering-hill/regular/large.jpg`,
    },

    // 112 (movie_id: 21)
    {
      movie_id: 21,
      type: "regular",
      size: "small",
      url: `${baseURL}/112/regular/small.jpg`,
    },
    {
      movie_id: 21,
      type: "regular",
      size: "medium",
      url: `${baseURL}/112/regular/medium.jpg`,
    },
    {
      movie_id: 21,
      type: "regular",
      size: "large",
      url: `${baseURL}/112/regular/large.jpg`,
    },

    // Lone Heart (movie_id: 22)
    {
      movie_id: 22,
      type: "regular",
      size: "small",
      url: `${baseURL}/lone-heart/regular/small.jpg`,
    },
    {
      movie_id: 22,
      type: "regular",
      size: "medium",
      url: `${baseURL}/lone-heart/regular/medium.jpg`,
    },
    {
      movie_id: 22,
      type: "regular",
      size: "large",
      url: `${baseURL}/lone-heart/regular/large.jpg`,
    },

    // Production Line (movie_id: 23)
    {
      movie_id: 23,
      type: "regular",
      size: "small",
      url: `${baseURL}/production-line/regular/small.jpg`,
    },
    {
      movie_id: 23,
      type: "regular",
      size: "medium",
      url: `${baseURL}/production-line/regular/medium.jpg`,
    },
    {
      movie_id: 23,
      type: "regular",
      size: "large",
      url: `${baseURL}/production-line/regular/large.jpg`,
    },

    // Dogs (movie_id: 24)
    {
      movie_id: 24,
      type: "regular",
      size: "small",
      url: `${baseURL}/dogs/regular/small.jpg`,
    },
    {
      movie_id: 24,
      type: "regular",
      size: "medium",
      url: `${baseURL}/dogs/regular/medium.jpg`,
    },
    {
      movie_id: 24,
      type: "regular",
      size: "large",
      url: `${baseURL}/dogs/regular/large.jpg`,
    },

    // Asia in 24 Days (movie_id: 25)
    {
      movie_id: 25,
      type: "regular",
      size: "small",
      url: `${baseURL}/asia-in-24-days/regular/small.jpg`,
    },
    {
      movie_id: 25,
      type: "regular",
      size: "medium",
      url: `${baseURL}/asia-in-24-days/regular/medium.jpg`,
    },
    {
      movie_id: 25,
      type: "regular",
      size: "large",
      url: `${baseURL}/asia-in-24-days/regular/large.jpg`,
    },

    // The Tasty Tour (movie_id: 26)
    {
      movie_id: 26,
      type: "regular",
      size: "small",
      url: `${baseURL}/the-tasty-tour/regular/small.jpg`,
    },
    {
      movie_id: 26,
      type: "regular",
      size: "medium",
      url: `${baseURL}/the-tasty-tour/regular/medium.jpg`,
    },
    {
      movie_id: 26,
      type: "regular",
      size: "large",
      url: `${baseURL}/the-tasty-tour/regular/large.jpg`,
    },

    // Darker (movie_id: 27)
    {
      movie_id: 27,
      type: "regular",
      size: "small",
      url: `${baseURL}/darker/regular/small.jpg`,
    },
    {
      movie_id: 27,
      type: "regular",
      size: "medium",
      url: `${baseURL}/darker/regular/medium.jpg`,
    },
    {
      movie_id: 27,
      type: "regular",
      size: "large",
      url: `${baseURL}/darker/regular/large.jpg`,
    },

    // Unresolved Cases (movie_id: 28)
    {
      movie_id: 28,
      type: "regular",
      size: "small",
      url: `${baseURL}/unresolved-cases/regular/small.jpg`,
    },
    {
      movie_id: 28,
      type: "regular",
      size: "medium",
      url: `${baseURL}/unresolved-cases/regular/medium.jpg`,
    },
    {
      movie_id: 28,
      type: "regular",
      size: "large",
      url: `${baseURL}/unresolved-cases/regular/large.jpg`,
    },

    // Mission: Saturn (movie_id: 29)
    {
      movie_id: 29,
      type: "regular",
      size: "small",
      url: `${baseURL}/mission-saturn/regular/small.jpg`,
    },
    {
      movie_id: 29,
      type: "regular",
      size: "medium",
      url: `${baseURL}/mission-saturn/regular/medium.jpg`,
    },
    {
      movie_id: 29,
      type: "regular",
      size: "large",
      url: `${baseURL}/mission-saturn/regular/large.jpg`,
    },
  ]);
};
