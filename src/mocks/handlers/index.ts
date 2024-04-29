import { loginHandler, socialLoginHandler } from './auth/login';
import { signoutHandler } from './auth/signout';
import { signupHandler } from './auth/signup';
import { verifyCodeHandler } from './auth/verifyCode';
import { verifyEmailHandler } from './auth/verifyEmail';

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

import { deleteNotificationHandler, getAllNotificationsHandler } from './notification/notification';

import {
  getAllPostsHandler,
  getPostByParamHandler,
  deletePostHandler,
  postPostNewHandler,
  putPurchaseStatusHandler,
  categoryPostsHandler,
} from './post/postHandlers';

import {
  cancelRequestHandler,
  getRequestsHandler,
  postRequestHandler,
  putRequestHandler,
} from './post/requestHandlers';

export const handlers = [
  verifyEmailHandler,
  verifyCodeHandler,
  signupHandler,
  signoutHandler,
  loginHandler,
  socialLoginHandler,
  getAllPostsHandler,
  categoryPostsHandler,
  getPostByParamHandler,
  getBookmarksHandler,
  postBookmarkHandler,
  deleteBookmarkHandler,
  deletePostHandler,
  putPurchaseStatusHandler,
  getProfilesHandler,
  postProfilesHandler,
  getEditProfilesHandler,
  postEditProfilesHandler,
  getRequestsHandler,
  postRequestHandler,
  getHistoryHandler,
  postMannersHandler,
  getMyPostsHandler,
  putRequestHandler,
  cancelRequestHandler,
  postPostNewHandler,
  getAllNotificationsHandler,
  deleteNotificationHandler,
];
