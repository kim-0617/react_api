import React from "react";

const YoutubeBox = ({ youtube, index }) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
        {
          <img
            src={youtube.snippet.thumbnails.high.url}
            alt={youtube.snippet.title}
          />
        }
        <em>
          <span className="title">{youtube.snippet.title}</span>
        </em>
      </a>
    </li>
  );
};

export const YoutubeCont = ({ youtubes }) => {
  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {youtubes.map((youtube, index) => {
              return <YoutubeBox key={index} youtube={youtube} index={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
