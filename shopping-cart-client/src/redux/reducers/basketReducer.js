import {
  ADD_PRODUCTS_BASKET,
  REMOVE_FROM_CART,
  GET_NUMBERS_BASKET,
  DECREASE_QUANTITY,
  INCREASE_PRODUCT_COUNT,
} from "../actions/types";

const localItems = localStorage.getItem("cartItems");
let cartProducts = [];
let basketNumbers = 0;
try {
  cartProducts = localItems ? JSON.parse(localItems) : [];
  basketNumbers = cartProducts.length;
} catch (error) {
  console.error("Error parsing cart items:", error);
}

const initialState = {
  cartProducts,
  basketNumbers,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_BASKET:
    case INCREASE_PRODUCT_COUNT:
      return {
        ...state,
        cartProducts: action.payload.cartItems,
        basketNumbers: state.basketNumbers + 1,
      };
    case REMOVE_FROM_CART:
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartProducts: action.payload.cartItems,
        basketNumbers: state.basketNumbers - 1,
      };

    case REMOVE_FROM_CART:
      const updatedCartItems = action.payload.cartItems;
      const updatedBasketNumbers = updatedCartItems.reduce(
        (basketNumbers, item) => basketNumbers - item.count,
        0
      );
      return {
        ...state,
        cartProducts: updatedCartItems,
        basketNumbers: updatedBasketNumbers,
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    default:
      return state;
  }
};
