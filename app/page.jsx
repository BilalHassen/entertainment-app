import "../styles/global.css";

import { getTrendingVideos } from "./lib/utils.js";
import TrendingVideos from "./components/TrendingVideos.jsx";

export default async function Page() {
  const trendingVideosResponse = await getTrendingVideos();
  return (
    <>
      <h1 className="text-heading-l font-outfit text-red">
        this is the home page
      </h1>
      <TrendingVideos trendingVideos={trendingVideosResponse} />
    </>
  );
}
