import './index.css';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchBanners } from '../../redux/actions/homeAction.js';

const Home = () => {
  const { banners } = useSelector((state) => state.home);

  return (
    <div
      style={{ display: "flex", maxWidth: "100vw", overflowX: "scroll" }}
      className="Home"
    >
      {banners.map(({ image, _id }) => (
        <img
          style={{ width: "100vw", height: "100px", objectFit: "cover" }}
          key={_id}
          src={image}
          alt="banners"
        />
      ))}
    </div>
  );
};

const loadHomeData = (store) => {
  return store.dispatch(fetchBanners());
};

export { loadHomeData };
export default Home;
