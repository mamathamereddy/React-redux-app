import {GET_PRODUCTS} from './types'

export const getProducts=()=>{
    console.log("Displaying products list")
    return(dispatch)=>{
       return fetch('http://localhost:8080/api/products')
        .then((res)=>{
            dispatch(loadProducts(res.data))
        })
        
    }
}

export function loadProducts(data){
    return{
        type:GET_PRODUCTS,
        data:data
    }
}