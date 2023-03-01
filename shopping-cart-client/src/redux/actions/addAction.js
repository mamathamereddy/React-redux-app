import { ADD_PRODUCTS_BASKET } from "./types";

export const addToBasket = (product, cartProduct) => (dispatch) => {
  const cartItems = cartProduct.slice();
  let productAlreadyInCart = false;
  const basketProduct = product[0];
  cartItems.forEach((cart) => {
    if (cart && basketProduct && cart.id === basketProduct.id) {
      cart.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...basketProduct, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_PRODUCTS_BASKET, cartItems: { cartItems } });
};
