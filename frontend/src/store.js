import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer, productdetailsReducer } from './store/reducers/productReducers'
import { cartReducer } from './store/reducers/cartReducers'

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productdetailsReducer,
    cart: cartReducer

});
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}
const middlewares = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;
