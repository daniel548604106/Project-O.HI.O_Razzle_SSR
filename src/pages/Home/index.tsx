import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ImageSlider from '@/modules/imageSlider/ImageSlider';
import { ProductCard } from '@/modules/productCard/ProductCard';
import { fetchBanners, getDiscountedProducts } from '@/redux/actions/homeAction.ts';

import DiscountedProducts from './components/DiscountedProducts/index';
import classes from './index.module.scss';

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
      <p className="text-red-500">sdfsdf</p>
      <ImageSlider slides={bannerSlides} />
      <section className={classes["section-wrapper"]}>
        <DiscountedProducts title="促銷專區" products={discountedProducts} />
      </section>
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
