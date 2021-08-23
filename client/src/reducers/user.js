import {GET_USER} from '../actions/user';

const initialState = {}

const user = (state = initialState,action)=> {
    switch(action.type) {
        case GET_USER:
            return { state, ...action.data }
        default:
            return state;
    }
}

export default user;