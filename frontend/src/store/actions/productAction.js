import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST } from './actionTypes';
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
