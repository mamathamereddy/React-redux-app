import {combineReducers} from 'redux';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import searchReducer from './searchReducer'

export default combineReducers({
basketState:basketReducer,
productsState:productsReducer,
search:searchReducer
})