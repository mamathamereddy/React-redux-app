import {GET_PRODUCTS_WITHID} from './types';

export const getProductId = () => {
    console.log("Displaying products list");
    return (dispatch) => {
      return fetch(`http://localhost:8080/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type:GET_PRODUCTS_WITHID,
            data: data,
          });
        });
    };
  };

export default getProductId
