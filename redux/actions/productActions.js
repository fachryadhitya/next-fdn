import { GET_PRODUCTS } from '../reducers/types';
// import axios from 'axios';

export const getProducts = data => async dispatch => {
  try {
    // const res = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: data
    });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
