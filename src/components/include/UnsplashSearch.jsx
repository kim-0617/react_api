import React, { useRef } from "react";

export const UnsplashSearch = ({ onSearch }) => {
  const inputRef = useRef("");

  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value) onSearch(value);
    else alert("검색어를 입력해주세요");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="unsplash__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>검색</button>
      </div>
    </div>
  );
};
