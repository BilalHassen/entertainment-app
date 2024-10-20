// app/api/data/recommended/route.js
import { NextResponse } from "next/server";
import dataBase from "../../../../knexfile.js"; // Import the initialized Knex instance

// This is a named export for the GET method
export async function GET() {
  try {
    const trendingVideos = await dataBase("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id") // Join before select
      .where("movies.is_trending", true) // Filter only trending movies
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_bookmarked",
        "movies.is_trending",
        dataBase.raw(`
      json_object_agg(thumbnails.size, thumbnails.url) AS thumbnails
    `) // Aggregates the thumbnails into an object
      )
      .groupBy("movies.id"); // Group by movie ID to avoid duplication

    console.log(trendingVideos);
    return NextResponse.json(trendingVideos);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      {
        message: "Error fetching recommended movies",
        error: error.message,
      },
      { status: 500 } // Return 500 Internal Server Error status
    );
  }
}
