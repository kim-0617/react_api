import React, { useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";

import { Title } from "../layout/Title";
import { YoutubeSlider } from "../include/YoutubeSlider";
import { YoutubeBtn } from "../include/YoutubeBtn";
import { YoutubeSearch } from "../include/YoutubeSearch";
import { YoutubeCont } from "../include/YoutubeCont";
import { Contact } from "../layout/Contact";
import { useState } from "react";

// tmp
import dummy from "../../utils/dummy.json";

export const Youtube = () => {
  const [youtubes, setYoutubes] = useState(dummy.items);
  const [randomVideos, setrandomVideos] = useState(dummy.items);
  const search = async (query) => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDJeI0388YoRP3fpYU1B_GOG4UtfeWFhdw&maxResults=20&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  // useEffect(() => {
  //   async function fetchMovie() {
  //     await fetch(
  //       "https://www.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyDJeI0388YoRP3fpYU1B_GOG4UtfeWFhdw&maxResults=20&type=video"
  //     )
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setYoutubes(result.items);
  //       })
  //       .catch((error) => console.log("error", error));
  //   }

  //   async function fetchRandomMovie() {
  //     await fetch(
  //       "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDJeI0388YoRP3fpYU1B_GOG4UtfeWFhdw&maxResults=20&type=video"
  //     )
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setrandomVideos(result.items);
  //       })
  //       .catch((error) => console.log("error", error));
  //   }
  //   fetchMovie();
  //   fetchRandomMovie();
  // }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "Reference API"]} />
        <YoutubeSlider youtubes={randomVideos} />
        <YoutubeBtn onSearch={search} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
