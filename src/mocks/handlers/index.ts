import { deleteBookmarkHandler, getBookmarksHandler, postBookmarkHandler } from './myPage/bookmark';
import { getMyPostsHandler } from './myPage/myPosts';
import {
  getEditProfilesHandler,
  getProfilesHandler,
  postEditProfilesHandler,
  postProfilesHandler,
} from './myPage/profile';

import { getAllPostsHandler, getPostByParamHandler, deletePostHandler } from './post/postHandlers';
import { cancelRequestHandler, getRequestsHandler, putRequestHandler } from './post/requestHandlers';

export const handlers = [
  getAllPostsHandler,
  getPostByParamHandler,
  getBookmarksHandler,
  postBookmarkHandler,
  deleteBookmarkHandler,
  deletePostHandler,
  getProfilesHandler,
  postProfilesHandler,
  getEditProfilesHandler,
  postEditProfilesHandler,
  getRequestsHandler,
  getMyPostsHandler,
  putRequestHandler,
  cancelRequestHandler,
];
