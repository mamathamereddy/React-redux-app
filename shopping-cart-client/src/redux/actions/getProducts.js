import { GET_PRODUCTS } from "./types";

export const getProducts = () => {
  //console.log("Displaying products list");
  return (dispatch) => {
    return fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCTS,
          data: data,
        });
      });
  };
};
