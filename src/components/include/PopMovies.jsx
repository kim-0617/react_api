import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const MovieBox = ({ movie, index }) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
      {movie.poster_path === null ? (
        <span>이미지가 없다.</span>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <em>
        <span className="title">{movie.title}</span>
        <span className="star">{movie.vote_average}</span>
      </em>
    </a>
  );
};

export const PopMovies = ({ movies }) => {
  return (
    <div className="cont__pop">
      <div className="container">
        <h2>오늘의 인기영화</h2>
        <div className="pop__inner">
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
            {movies.map((movie, index) => {
              return (
                <SwiperSlide key={index}>
                  <MovieBox key={index} movie={movie} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
