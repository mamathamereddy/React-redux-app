import {combineReducers} from 'redux';
import basketReducer from './basketReducer';
import productReducers from './productsReducer'

export default combineReducers({
basketState:basketReducer,
productState:productReducers
})