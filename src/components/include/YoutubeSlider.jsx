import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, Pagination, FreeMode } from "swiper";

const YoutubeBox = ({ youtube, index }) => {
  console.log(youtube.snippet.thumbnails);
  return (
    <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
      <em>
        <span className="title">
          {youtube.snippet.title.length > 23
            ? youtube.snippet.title.slice(0, 23) + " . . ."
            : youtube.snippet.title}
        </span>
      </em>
    </a>
  );
};

export const YoutubeSlider = ({ youtubes }) => {
  return (
    <div className="cont__youtubeRandom">
      <div className="container">
        <h2>볼만한거 없을까 ?</h2>
        <div className="youtubeRandom__inner">
          <Swiper
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, FreeMode]}
            className="mySwiper"
          >
            {youtubes.map((youtube, index) => {
              return (
                <SwiperSlide key={index * Math.random()}>
                  <YoutubeBox
                    key={index * Math.random()}
                    youtube={youtube}
                    index={index}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
