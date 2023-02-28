import {GET_CATAGEORY_LIST} from './types';


export const getCatageoryList = (category) => {
    console.log("Displaying catageorylist");
    return (dispatch) => {
      return fetch(`http://localhost:8080/api/products/search?query=${category}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type:GET_CATAGEORY_LIST,
            data: data,
          });
        });
    };
  };

export default getCatageoryList
