import React, { useCallback } from "react";

const keyword = [
  "spring",
  "summer",
  "fall",
  "winter",
  "ocean",
  "mountain",
  "dessert",
];
const SearchBtn = ({ data, func }) => {
  return <li onClick={func}>{data}</li>;
};

export const UnsplashBtn = ({ onSearch }) => {
  const onClickSearch = useCallback(
    (e) => {
      onSearch(e.target.textContent);
    },
    [onSearch]
  );

  return (
    <section className="cont__unsplashBtn">
      <h2>오늘의 추천 키워드!</h2>
      <ul className="unsplash__btn">
        {keyword.map((v, index) => (
          <SearchBtn key={v + index} func={onClickSearch} data={v} />
        ))}
      </ul>
    </section>
  );
};
