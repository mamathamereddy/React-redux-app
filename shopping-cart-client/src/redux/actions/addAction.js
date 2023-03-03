import { ADD_PRODUCTS_BASKET } from "./types";

export const addToBasket = (product, cartProduct) => (dispatch) => {
  const cartItems = cartProduct.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cart) => {
    if (cart && product && cart.id === product.id) {
      cart.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_PRODUCTS_BASKET, cartItems: { cartItems } });
};
