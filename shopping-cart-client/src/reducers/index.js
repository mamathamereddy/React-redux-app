import {combineReducers} from 'redux';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer'

export default combineReducers({
basketState:basketReducer,
productsState:productsReducer
})