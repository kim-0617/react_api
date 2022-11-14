import React, { useCallback } from "react";

const keyword = [
  { name: "spring" },
  { name: "summer" },
  { name: "fall" },
  { name: "winter" },
  { name: "ocean" },
  { name: "mountain" },
  { name: "dessert" },
];
const SearchBtn = ({ data, func }) => {
  return <li onClick={func}>{data.name}</li>;
};

export const YoutubeBtn = ({ onSearch }) => {
  const onClickSearch = useCallback(
    (e) => {
      onSearch(e.target.textContent);
    },
    [onSearch]
  );

  return (
    <section className="cont__youtubeBtn">
      <h2>오늘의 추천 키워드!</h2>
      <ul className="youtube__btn">
        {keyword.map((v, index) => (
          <SearchBtn key={v + index} func={onClickSearch} data={v} />
        ))}
      </ul>
    </section>
  );
};
