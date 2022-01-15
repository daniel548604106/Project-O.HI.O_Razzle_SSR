import { FETCH_BANNERS } from "../actions/homeAction.js";

const initialState = {
  banners: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return { ...state, banners: action.payload };

    default:
      return state;
  }
};
