import {SEARCH} from './types';

export const  searchAction=(term)=>{
    return(dispatch)=>{
        console.log('searching for products');
        dispatch({
               type:SEARCH,
               term:term
        })
    }
}

export default  searchAction





 
 
