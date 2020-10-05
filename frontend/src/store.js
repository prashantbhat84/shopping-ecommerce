import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer, productdetailsReducer } from './store/reducers/productReducers'

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productdetailsReducer
});
// const initialState = {}
const middlewares = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;
