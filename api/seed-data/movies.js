exports.seed = async function (knex) {
  // Deletes ALL existing entries in the movies table
  await knex("movies").del();

  // Insert movies data into the movies table
  await knex("movies").insert([
    {
      id: 1,
      title: "Beyond Earth",
      year: 2019,
      category: "Movie",
      rating: "PG",
      is_bookmarked: false,
      is_trending: true,
    },
    {
      id: 2,
      title: "Bottom Gear",
      year: 2021,
      category: "Movie",
      rating: "PG",
      is_bookmarked: false,
      is_trending: true,
    },
    {
      id: 3,
      title: "Undiscovered Cities",
      year: 2019,
      category: "TV Series",
      rating: "E",
      is_bookmarked: false,
      is_trending: true,
    },
    {
      id: 4,
      title: "1998",
      year: 2021,
      category: "Movie",
      rating: "18+",
      is_bookmarked: false,
      is_trending: true,
    },
    {
      id: 5,
      title: "Dark Side of the Moon",
      year: 2018,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: true,
      is_trending: true,
    },
    {
      id: 6,
      title: "The Great Lands",
      year: 2019,
      category: "Movie",
      rating: "E",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 7,
      title: "The Diary",
      year: 2019,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 8,
      title: "Earth’s Untouched",
      year: 2017,
      category: "Movie",
      rating: "18+",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 9,
      title: "No Land Beyond",
      year: 2019,
      category: "Movie",
      rating: "E",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 10,
      title: "During the Hunt",
      year: 2016,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 11,
      title: "Autosport the Series",
      year: 2016,
      category: "TV Series",
      rating: "18+",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 12,
      title: "Same Answer II",
      year: 2017,
      category: "Movie",
      rating: "E",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 13,
      title: "Below Echo",
      year: 2016,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 14,
      title: "The Rockies",
      year: 2015,
      category: "TV Series",
      rating: "E",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 15,
      title: "Relentless",
      year: 2017,
      category: "Movie",
      rating: "PG",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 16,
      title: "Community of Ours",
      year: 2018,
      category: "TV Series",
      rating: "18+",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 17,
      title: "Van Life",
      year: 2015,
      category: "Movie",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 18,
      title: "The Heiress",
      year: 2021,
      category: "Movie",
      rating: "PG",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 19,
      title: "Off the Track",
      year: 2017,
      category: "Movie",
      rating: "18+",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 20,
      title: "Whispering Hill",
      year: 2017,
      category: "Movie",
      rating: "E",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 21,
      title: "112",
      year: 2013,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 22,
      title: "Lone Heart",
      year: 2017,
      category: "Movie",
      rating: "E",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 23,
      title: "Production Line",
      year: 2018,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 24,
      title: "Dogs",
      year: 2016,
      category: "TV Series",
      rating: "E",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 25,
      title: "Asia in 24 Days",
      year: 2020,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 26,
      title: "The Tasty Tour",
      year: 2016,
      category: "TV Series",
      rating: "PG",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 27,
      title: "Darker",
      year: 2017,
      category: "Movie",
      rating: "18+",
      is_bookmarked: true,
      is_trending: false,
    },
    {
      id: 28,
      title: "Unresolved Cases",
      year: 2018,
      category: "TV Series",
      rating: "18+",
      is_bookmarked: false,
      is_trending: false,
    },
    {
      id: 29,
      title: "Mission: Saturn",
      year: 2017,
      category: "Movie",
      rating: "PG",
      is_bookmarked: true,
      is_trending: false,
    },
  ]);
};
