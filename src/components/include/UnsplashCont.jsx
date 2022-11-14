import React from "react";

const ImageBox = ({ image, index }) => {
  return (
    <li>
      <a href={image.links.html}>
        {<img src={image.urls.regular} alt={image.alt_description} />}
        <em>
          <span className="title">{image.alt_description}</span>
        </em>
      </a>
    </li>
  );
};

export const UnsplashCont = ({ images }) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {images.map((image, index) => {
              return <ImageBox key={index} image={image} index={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
