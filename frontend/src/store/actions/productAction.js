import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from './actionTypes';
import axios from 'axios';

export const listproducts = () => {
    return async dispatch => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get('/api/products');
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

        } catch (error) {
            const payload = error.response && error.response.data.message ? error.response.data.message : error.message;
            dispatch({ type: PRODUCT_LIST_FAIL, payload })

        }



    }
}
export const listProductDetail = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST });
            const { data } = await axios.get(`/api/products/${id}`);
            dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
        } catch (error) {
            const payload = error.response && error.response.data.message ? error.response.data.message : error.message;
            dispatch({ type: PRODUCT_DETAILS_FAIL, payload })
        }

    }
}
