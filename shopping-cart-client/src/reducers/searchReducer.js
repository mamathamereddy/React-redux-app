import { SEARCH} from "../actions/types";


const initialState = {
    term:''
}

export default (state = initialState, action) => {
    switch (action.type){
        case SEARCH:
            return action.term
        default:
            return state;
    }
    
}