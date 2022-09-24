import * as postsActionTypes from "../ActionTypes/postsActionTypes";

export const getPosts = () => {
  const action = {
    type: postsActionTypes.GET_POSTS,
  };
  return action;
};
export const setPosts = (post: any) => {
  const action = {
    type: postsActionTypes.SET_POSTS,
    post,
  };
  return action;
};
