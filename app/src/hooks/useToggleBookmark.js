import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useToggleBookmark = (token) => {
  const queryClient = useQueryClient(); // Gives access to cache control functions

  const addMutation = useMutation({
    mutationFn: async (videoId) => {
      await axios.post(
        'http://localhost:3000/bookmarks',
        { videoId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['bookmarks']); // Force refetch of bookmarks
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (videoId) => {
      await axios.delete('http://localhost:3000/bookmarks', {
        data: { videoId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['bookmarks']); // Refetch bookmarks after delete
    },
  });

  return { addMutation, deleteMutation };
};
