import { call, put } from "redux-saga/effects";
import getProductsApi from "../../../services/productService";
import { setProducts } from "../../Actions/productsActionCreator";

export function* handleGetProducts() {
  try {
    const response = yield call(getProductsApi);
    if (response.status === 200) {
      const { data } = response;
      console.log("product data", data);
      yield put(setProducts(data));
    } else {
      throw new Error("Could not connect to API");
    }
  } catch (err) {
    console.log(err);
  }
}
