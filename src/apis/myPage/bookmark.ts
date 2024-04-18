import { axiosAccessFn } from '../apiClient';

const axiosAccess = axiosAccessFn();

export const getBookmarks = async () => {
  try {
    const res = await axiosAccess({
      method: 'get',
      url: '/post/bookmark',
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = async (postId: number) => {
  try {
    const res = await axiosAccess({
      method: 'delete',
      url: `post/bookmark/${postId}`,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
