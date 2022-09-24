import * as productsActionTypes from "../ActionTypes/productActionTypes";

export const getProducts = () => {
  const action = {
    type: productsActionTypes.GET_PRODUCTS,
  };
  return action;
};
export const setProducts = (products: any) => {
  const action = {
    type: productsActionTypes.SET_PRODUCTS,
    products,
  };
  return action;
};
