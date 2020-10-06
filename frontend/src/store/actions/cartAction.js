import { CART_ADD_ITEM } from './actionTypes';
import axios from 'axios';

export const addItemToCart = (id, qty) => {

    return async (dispatch, getState) => {
        const { data } = await axios.get(`/api/products/${id}`);

        const { _id, name, image, price, description, countInStock } = data
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: _id,
                name,
                image,
                price,
                description,
                countInStock,
                qty

            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }
}