import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";

import { Title } from "../layout/Title";
import { Contact } from "../layout/Contact";
import { MovieCont } from "../include/MovieCont";
import { MovieSearch } from "../include/MovieSearch";
import { PopMovies } from "../include/PopMovies";

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [pop, setPop] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4dce5e2aa071cda3c95daac64628defc&query=${query}&page=1&language=ko-KR`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=4dce5e2aa071cda3c95daac64628defc&query=super&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4dce5e2aa071cda3c95daac64628defc&language=ko-KR&page=1"
    )
      .then((response) => response.json())
      .then((result) => setPop(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "Reference API"]} />
        <PopMovies movies={pop} />
        <MovieSearch onSearch={search} />
        {movies.length === 0 ? null : <MovieCont movies={movies} />}
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
