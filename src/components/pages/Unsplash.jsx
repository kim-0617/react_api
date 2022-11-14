import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";

import { Title } from "../layout/Title";
import { UnsplashSlider } from "../include/UnsplashSlider";
import { UnsplashSearch } from "../include/UnsplashSearch";
import { UnsplashBtn } from "../include/UnsplashBtn";
import { UnsplashCont } from "../include/UnsplashCont";
import { Contact } from "../layout/Contact";

export const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=HM17nZcVD0bVEpTRGlkeJxrWcWzg98jC7PWTvBL1x10&query=${query}&per_page=10`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=HM17nZcVD0bVEpTRGlkeJxrWcWzg98jC7PWTvBL1x10&count=10&query=city"
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=HM17nZcVD0bVEpTRGlkeJxrWcWzg98jC7PWTvBL1x10&count=10"
    )
      .then((response) => response.json())
      .then((result) => setRandomImages(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Reference API"]} />
        <UnsplashSlider random={randomImages} />
        <UnsplashBtn onSearch={search} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
