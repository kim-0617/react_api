import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';

import { Title } from '../layout/Title';
import { MovieCont } from '../include/MovieCont';
import { Contact } from '../layout/Contact';

export const Movie = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=4dce5e2aa071cda3c95daac64628defc&query=marble&page=1")
            .then(response => response.json())
            .then(result => setMovies(result.results))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["Movie", "Reference API 소개합니다."]} />
                {movies.length === 0 ? null : <MovieCont movies={movies} />}
                <Contact />
            </Contents>
            <Footer />
        </>
    );
}