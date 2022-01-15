import axiosInstance from '@/utils/axios.ts';

export const FETCH_BANNERS = "FETCH_BANNERS";
export const GET_DISCOUNTED_PRODUCTS = "GET_DISCOUNTED_PRODUCTS";

export const fetchBanners = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/banners");
    dispatch({
      type: FETCH_BANNERS,
      payload: data?.banners,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDiscountedProducts = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/products/discount");
    const { products } = data;
    console.log(data);
    dispatch({
      type: GET_DISCOUNTED_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.log(error);
  }
};
