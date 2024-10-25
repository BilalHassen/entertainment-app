import axios from "axios";

export const getTrendingVideos = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${baseURL}/videos/trending`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    throw error; // Throw the error
  }
};
