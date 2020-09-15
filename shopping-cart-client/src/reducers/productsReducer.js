import { GET_PRODUCTS,GET_PRODUCTS_WITHID} from "../actions/types";

const initialState = {
  productsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        productsList: action.data,
      };
      case GET_PRODUCTS_WITHID:
        return{
          productID:action.data
        }
    default:
      return state;
  }
};
