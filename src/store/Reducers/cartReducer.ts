/* eslint-disable array-callback-return */
import * as actionTypes from "../ActionTypes/cartActionTypes";
const initialState: CartState = {
  Cart: [],
};

const CartReducer = (
  state: CartState = initialState,
  action: any
): CartState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        Cart: [...state.Cart, action.payload],
      };

    case actionTypes.EDIT_ITEM:
      const editedCart: any = action.payload;
      return {
        ...state,
        Cart: [...editedCart],
      };

    case actionTypes.REMOVE_ITEM:
      const updatedCart: any[] = state.Cart.filter(
        (Item) => Item.id !== action.payload
      );
      return {
        ...state,
        Cart: updatedCart,
      };
    case actionTypes.CLEAN_CART:
      return {
        ...state,
        Cart: [],
      };
  }
  return state;
};

export default CartReducer;
