import { signupHandler } from './\bauth/signup';
import { verifyCodeHandler } from './\bauth/verifyCode';
import { verifyEmailHandler } from './\bauth/verifyEmail';
import { deleteBookmarkHandler, getBookmarksHandler, postBookmarkHandler } from './myPage/bookmark';

import { getHistoryHandler } from './myPage/history';
import { postMannersHandler } from './myPage/manners';

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
  verifyEmailHandler,
  verifyCodeHandler,
  signupHandler,
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
  getHistoryHandler,
  postMannersHandler,
  getMyPostsHandler,
  putRequestHandler,
  cancelRequestHandler,
];
