// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './imageSlider.module.scss';

SwiperCore.use([Navigation, Pagination]);

interface ImageSliderProps {
  slides: {
    img: string;
    id: string;
  }[];
}

const ImageSlider = (props: ImageSliderProps) => {
  const { slides } = props;
  return (
    <div>
      <Swiper
        className={classes.slide}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map(({ img, id }) => (
          <SwiperSlide key={id}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={img}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
