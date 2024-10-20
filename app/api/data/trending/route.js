// app/api/data/recommended/route.js
import { NextResponse } from "next/server";
import dataBase from "../../../../knexfile.js"; // Import the initialized Knex instance

// This is a named export for the GET method
export async function GET() {
  try {
    const trendingVideos = await dataBase("movies").where("is_trending", true);
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
