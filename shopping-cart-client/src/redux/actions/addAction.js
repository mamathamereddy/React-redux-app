import {ADD_PRODUCTS_BASKET} from './types';

export const  addToBasket=()=>{
    return(dispatch)=>{
        console.log('Adding to basket');
        dispatch({
               type:ADD_PRODUCTS_BASKET
        })
    }
}