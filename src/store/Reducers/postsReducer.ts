import { SET_POSTS } from "../ActionTypes/postsActionTypes";
const initialState = {};
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      const { post } = action;
      return { ...state, post };
    default:
      return state;
  }
};

export default PostsReducer;
