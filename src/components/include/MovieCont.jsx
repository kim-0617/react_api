import React from 'react'

// adult, backdrop_path, id, original_title, overview, popularity, 
// release_date, title, video, vote_average, vote_count

const MovieBox = ({movie, index}) => {
    return (
        <ul>
            <li>num : {index + 1}</li>
            <li>title : {movie.title}</li>
            <li>popularity : {movie.popularity}</li>
            <li>overview : {movie.overview}</li>
            <li>vote_average : {movie.vote_average}</li>
        </ul>
    );
}

export const MovieCont = ({ movies }) => {
    console.log(movies);
    return (
        <>
            <section className="cont__movie">
                <div className="container">
                    <div className="movie__inner">
                        <div className="movie__box">
                            {movies.map((movie, index) => {
                                return <MovieBox key={index} movie={movie} index={index}/>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}