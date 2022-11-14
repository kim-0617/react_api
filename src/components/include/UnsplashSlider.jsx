import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Autoplay, EffectCards, Pagination } from "swiper";

const UnsplashBox = ({ image, index }) => {
  return (
    <a href={image.links.html}>
      <img src={image.urls.raw} alt={image.alt_description} />
      <em>
        <span className="title">{image.alt_description}</span>
      </em>
    </a>
  );
};

export const UnsplashSlider = ({ random }) => {
  return (
    <div className="cont__unsplashRandom">
      <div className="container">
        <h2>랜덤 이미지</h2>
        <div className="unsplashRandom__inner">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCards, Pagination, Autoplay]}
            className="mySwiper"
          >
            {random.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <UnsplashBox key={index} image={image} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
