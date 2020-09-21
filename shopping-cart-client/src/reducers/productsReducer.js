import { GET_PRODUCTS,GET_PRODUCTS_WITHID,GET_CATAGEORY_LIST} from "../actions/types";

const initialState = {
  productsList: [],
  productID:[],
  categoryList:[]
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
        case GET_CATAGEORY_LIST:
        return{
          categoryList:action.data
        }
    default:
      return state;
  }
};
