import { CART_ADD_ITEM, CART_REMOVE_ITEM, } from '../actions/actionTypes';

const initialState = {
    cartItems: []
}
export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case CART_ADD_ITEM: {

            const item = action.payload;
            const exists = state.cartItems.find(x => x.product === item.product);
            if (!exists) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === exists.product ? item : x)
                }
            }
        }

        default: return state
    }

}