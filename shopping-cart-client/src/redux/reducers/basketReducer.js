import { ADD_PRODUCTS_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

// const initialState = {
//   basketNumbers: 0,
//   cartProducts: [],
// };

const localItems = localStorage.getItem("cartItems");
const initialState = {
  cartProducts: localItems ? JSON.parse(localItems) : [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_BASKET:
      return {
        ...state,
        cartProducts: action.cartItems.cartItems,
        //basketNumbers: state.basketNumbers + 1,
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
