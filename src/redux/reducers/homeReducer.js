import {
  FETCH_BANNERS,
  GET_DISCOUNTED_PRODUCTS,
} from "../actions/homeAction.ts";

const initialState = {
  banners: [],
  discountedProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };
    case GET_DISCOUNTED_PRODUCTS:
      return { ...state, discountedProducts: action.payload };
    default:
      return state;
  }
};
