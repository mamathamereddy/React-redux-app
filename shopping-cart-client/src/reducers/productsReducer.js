import{GET_PRODUCTS} from '../actions/types'

const initialState={
    productsList:[]
}

export default(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
            data:action.data
        }
        default:
            return state;
    }
}
