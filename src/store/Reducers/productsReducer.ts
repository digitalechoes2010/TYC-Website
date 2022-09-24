import { SET_PRODUCTS } from "../ActionTypes/productActionTypes";
const initialState = {};
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const { products } = action;
      return { ...state, products };
    default:
      return state;
  }
};

export default ProductsReducer;
