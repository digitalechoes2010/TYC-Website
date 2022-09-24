import { call, put } from "redux-saga/effects";
import getCategoryApi from "../../../services/categoriesService";
import { setCategory } from "../../Actions/categoriesActionCreator";

export function* handleGetCategories() {
  try {
    const response = yield call(getCategoryApi);
    if (response.status === 200) {
      console.log("category data", response.data);
      const { data } = response;
      yield put(setCategory(data[0].categories));
    } else {
      throw new Error("Could not connect to API");
    }
  } catch (err) {
    console.log(err);
  }
}
