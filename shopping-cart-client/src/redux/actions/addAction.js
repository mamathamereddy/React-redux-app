import { ADD_PRODUCTS_BASKET, INCREASE_PRODUCT_COUNT } from "./types";

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
  dispatch({ type: ADD_PRODUCTS_BASKET, payload: { cartItems } });
};

export const increaseProductCount = (product, cartProduct) => (dispatch) => {
  console.log("increase");
  const exist = cartProduct.find((x) => x.id === product.id);
  let cartItems = [];

  if (exist) {
    cartItems = cartProduct.map((x) =>
      x.id === product.id ? { ...exist, count: exist.count + 1 } : x
    );
  }

  dispatch({ type: INCREASE_PRODUCT_COUNT, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};
