// app/api/data/trending/route.js
import { NextResponse } from "next/server";
import knex from "knex";
import knexConfig from "../../../../knexfile.js";

// Initialize the database connection
const db = knex(knexConfig);

export async function GET() {
  try {
    const trendingVideos = await db("movies")
      .join("thumbnails", "movies.id", "=", "thumbnails.movie_id")
      .where("movies.is_trending", true)
      .select(
        "movies.id",
        "movies.title",
        "movies.year",
        "movies.category",
        "movies.rating",
        "movies.is_bookmarked",
        "movies.is_trending",
        db.raw("json_object_agg(thumbnails.size, thumbnails.url) AS thumbnails")
      )
      .groupBy("movies.id");

    return NextResponse.json(trendingVideos);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      {
        message: "Error fetching trending videos",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
