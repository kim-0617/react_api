import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

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
    <div className="pop__inner">
      <div className="container">
        <h2>오늘의 인기영화</h2>
        <div className="pop__inner">
          <Swiper
            pagination={true}
            // navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
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
