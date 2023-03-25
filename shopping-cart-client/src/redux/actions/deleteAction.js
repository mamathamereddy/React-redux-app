import { REMOVE_FROM_CART, DECREASE_QUANTITY } from "./types";

export const removeFromCart = (product, cartProduct) => (dispatch) => {
  const cartItems = cartProduct.slice().filter((x) => x.id !== product.id);
  //const count = cartItems.reduce((acc, cur) => acc + cur.count, 0);

  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decreaseProductCount = (product, cartProduct) => (dispatch) => {
  const exist = cartProduct.find((x) => x.id === product.id);
  let cartItems = [];

  if (exist.count === 1) {
    cartItems = cartProduct.filter((x) => x.id !== product.id);
  } else {
    cartItems = cartProduct.map((x) =>
      x.id === product.id ? { ...exist, count: exist.count - 1 } : x
    );
  }

  dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};
