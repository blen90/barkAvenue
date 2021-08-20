import {ADD_TO_CART,CART_ITEM_UPDATE} from '../actions/cart';

const initialState = {
    items: [
        // example data
        { userId:1, valuePack: 'basic', dateFrom: '8/1/21', dateTo: '8/2/21' }
    ]
}

const cart = (state = initialState,action)=> {
    switch(action.type) {
        case ADD_TO_CART:
            return receiveAddToCart(state,action)
        case CART_ITEM_UPDATE:
            return receiveCartItemUpdate(state,action)
        default:
            return state;
    }
}
function receiveAddToCart(state,action) {
    let item = action.data;
    let items = state.items;
    return {state,items: [...items,item]}
}

function receiveCartItemUpdate(state,action) {
    let updateItem = action.data;
    let items = state.items.map( item => {
        if(item.userId === updateItem.userId) {
            return {...item,...updateItem}
        }
        return {...item}
    });
    return {...state,items:[...items]}
}

export default cart;