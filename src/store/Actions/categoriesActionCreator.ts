import * as categoriesActionTypes from "../ActionTypes/categoriesActionTypes";

export const getCategory = () => {
  const action = {
    type: categoriesActionTypes.GET_CATEGORIES,
  };
  return action;
};
export const setCategory = (category: any) => {
  const action = {
    type: categoriesActionTypes.SET_CATEGORIES,
    category,
  };
  return action;
};
