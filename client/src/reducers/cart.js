import {ADD_TO_CART,CART_ITEM_UPDATE,REMOVE_FROM_CART, VIEW_CART} from '../actions/cart';
import moment from 'moment';

const initialState = {
    items: [
        // example data
        { id:1, userId:1, serviceName: 'Basic Pawsome Stay', dateFrom: '8/1/21', dateTo: '8/2/21', price: 5, totalPrice: 5 }
    ]
}

const cart = (state = initialState,action)=> {
    switch(action.type) {
        case ADD_TO_CART:
            return receiveAddToCart(state,action)
        case CART_ITEM_UPDATE:
            return receiveCartItemUpdate(state,action)
        case REMOVE_FROM_CART:
            return removeFromCart(state,action);
        case VIEW_CART:
            return {state};
        default:
            return state;
    }
}

function receiveAddToCart(state,action) {
    let item = action.data;
    let items = state.items;
    return {...state,items: [...items,item]}
}

function receiveCartItemUpdate(state,action) {
    let updateItem = action.data;
    let items = state.items.map( item => {
        if(item.id === updateItem.id) {

            let dateTo = updateItem.dateTo ? updateItem.dateTo : item.dateTo;
            let dateFrom = updateItem.dateFrom ? updateItem.dateFrom : item.dateFrom;
            let price = updateItem.price ? updateItem.price : item.price;

            console.log('dateTo',dateTo);
            console.log('dateFrom',dateFrom)
            console.log('price',price)
            let duration = moment.duration(moment(dateTo).diff(moment(dateFrom)));
            console.log('duration',duration);
            let days = duration.asDays() + 1;
            console.log('days',days);
            let totalPrice = days * price
            return {...item,...updateItem,price,totalPrice}
        }
        return {...item}
    });
    return {...state,items:[...items]}
}

function removeFromCart(state, action) {
    let removeItem = state.items.filter((item) => {
        return item.id !== action.id;
    });
    return {
    ...state,
    items: removeItem,
  };
}

export default cart;