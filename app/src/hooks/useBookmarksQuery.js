
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useBookmarksQuery = (token) => {
  return useQuery({
    queryKey: ['bookmarks'], // Unique key to identify/categorize this query in the cache
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/bookmarks', {
        headers: {
          Authorization: `Bearer ${token}`, // Include user token for auth
        },
      });
      return response.data; // This becomes 'data'
    },
  });
};
