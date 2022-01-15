import axios from "axios";
export const FETCH_BANNERS = "FETCH_BANNERS";

export const fetchBanners = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://o-hi-o-server.de.r.appspot.com/v1/banners"
    );
    console.log(data);
    dispatch({
      type: FETCH_BANNERS,
      payload: data?.banners,
    });
  } catch (error) {
    console.log(error);
  }
};
