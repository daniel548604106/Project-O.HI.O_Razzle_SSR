import './index.css';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ImageSlider from '@/modules/imageSlider/ImageSlider';
import { ProductCard } from '@/modules/productCard/ProductCard';
import { fetchBanners, getDiscountedProducts } from '@/redux/actions/homeAction.ts';

const Home = () => {
  const { banners, discountedProducts } = useSelector((state) => state.home);
  const bannerSlides = banners?.map(({ image, _id }) => ({
    img: image,
    id: _id,
  }));
  useEffect(() => {
    console.log(discountedProducts);
  }, [discountedProducts]);
  return (
    <div>
      <div
        style={{ display: "flex", maxWidth: "100vw", overflowX: "scroll" }}
        className="Home"
      ></div>
      <ImageSlider slides={bannerSlides} />
      {discountedProducts.map((product) => (
        <ProductCard
          customStyle={{ width: "300px", height: "300px" }}
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

const loadHomeData = (store) => {
  return Promise.all([
    store.dispatch(fetchBanners()),
    store.dispatch(getDiscountedProducts()),
  ]);
};

export { loadHomeData };
export default Home;
