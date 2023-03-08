import { GET_PRODUCTS_WITHID } from "./types";

export const getProductId = (id) => {
  //console.log("Displaying products detailpage with id");
  return (dispatch) => {
    return fetch(
      `https://shopping-cart-backend-ioaa.onrender.com/api/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCTS_WITHID,
          data: data,
        });
      });
  };
};

export default getProductId;
