import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import MainCont from '../include/MainCont';

export const Main = () => {
  return (
    <>
      <Header />
      <Contents>
        <MainCont />
      </Contents>
      <Footer />
    </>
  );
}