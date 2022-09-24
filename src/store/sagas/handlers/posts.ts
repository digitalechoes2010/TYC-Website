import { call, put } from "redux-saga/effects";
import getPostsApi from "../../../services/postService";
import { setPosts } from "../../Actions/postsActionCreator";

export function* handleGetPosts() {
  try {
    const response = yield call(getPostsApi);
    if (response.status === 200) {
      const { data } = response;
      console.log(data);
      yield put(setPosts(data));
    } else {
      throw new Error("Could not connect to API");
    }
  } catch (err) {
    console.log(err);
  }
}
