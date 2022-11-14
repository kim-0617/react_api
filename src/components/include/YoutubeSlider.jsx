import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const YoutubeBox = ({ youtube, index }) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
      <img
        src={youtube.snippet.thumbnails.high.url}
        alt={youtube.snippet.title}
      />
      <em>
        <span className="title">{youtube.snippet.title}</span>
      </em>
    </a>
  );
};

export const YoutubeSlider = ({ youtubes }) => {
  return (
    <div className="cont__youtubeRandom">
      <div className="container">
        <h2>볼만한거 없을까?</h2>
        <div className="youtubeRandom__inner">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            initialSlide="5"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {youtubes.map((youtube, index) => {
              return (
                <SwiperSlide key={index}>
                  <YoutubeBox key={index} youtube={youtube} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
