import { GET_PRODUCTS } from './types';

const initialState = {
  productList: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productList: action.payload
      };

    default:
      return state;
  }
}
