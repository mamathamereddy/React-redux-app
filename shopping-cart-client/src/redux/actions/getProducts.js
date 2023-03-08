import { GET_PRODUCTS } from "./types";

export const getProducts = () => (dispatch) => {
  console.log("Displaying products list");
  return fetch("https://shopping-cart-backend-ioaa.onrender.com/api/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_PRODUCTS,
        data: data,
      });
    });
};
