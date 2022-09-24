import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "./Reducers/cartReducer";
import CategoriesReducer from "./Reducers/categoriesReducer";
import LoginReducer from "./Reducers/loginReducer";
import PostsReducer from "./Reducers/postsReducer";
import ProductsReducer from "./Reducers/productsReducer";
import { SignupReducer } from "./Reducers/signUpReducer";
import UserReducer from "./Reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
};
const RootReducer = combineReducers({
  CartReducer,
  CategoriesReducer,
  PostsReducer,
  ProductsReducer,
  LoginReducer,
  UserReducer,
  SignupReducer,
});
export default persistReducer(persistConfig, RootReducer);
