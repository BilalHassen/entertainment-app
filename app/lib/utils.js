import axios from "axios";

export const getTrendingVideos = async () => {
  const url = "http://localhost:3000/api/data/trending";
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    throw error; // Throw the error
  }
};
