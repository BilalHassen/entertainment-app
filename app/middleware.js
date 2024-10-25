import { NextResponse } from "next/server";

export function middleware() {
  // Get the allowed origin from environment variables
  const allowedOrigin = process.env.NEXT_PUBLIC_API_BASE_URL;

  // retrieve the current response
  const res = NextResponse.next();

  // add the CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", allowedOrigin);
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}
