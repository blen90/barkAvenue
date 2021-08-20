
const {ADD_TO_CART} = './actions/cart';

const initialState = {
    items: [
        // { package: 'basic', dateFrom: '8/20/2021', dateTo: '8/23/2021', userid: 1 }, // item
        // { package: 'premium', dateFrom: '8/24/2021', dateTo: '8/27/2021', userid: 1 },
        // { package: 'Deluxe', dateFrom: '8/28/2021', dateTo: '8/29/2021', userid: 1 },
    ]
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            // new item from cart
            let item = action.data;
            // recent items in carts
            let items = state.items;
            //  adding new item in carts
            return {...state, items: [...items,item] };
        default:
            return 'nothing';
    }
}