import {ADD_TO_CART} from './actions/cart';

const initialState = {
    items: [
        // example data
        // { userid:1, package: 'basic', dateFrom: '8/1/21', dateTo: '8/2/21' }
    ]
}

const cart = (state = initialState,action)  => {
    switch(action.type) {
        case ADD_TO_CART:
            let item = action.data;
            let items = state.items;
            return {state,items: [...items,item]}
        default:
            break;
    }
}

export default cart;