import React from 'react'

// adult, backdrop_path, id, original_title, overview, popularity, 
// release_date, title, video, vote_average, vote_count

const MovieBox = ({ movie, index }) => {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                {movie.poster_path === null ? <span>이미지가 없다.</span> : <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />}
                <em>
                    <span className='title'>{movie.title}</span>
                    <span className='star'>{movie.vote_average}</span>
                </em>
            </a>
        </li>
    );
}

export const MovieCont = ({ movies }) => {
    return (
        <>
            <section className="cont__movie">
                <div className="container">
                    <div className="movie__inner">
                        <ul>
                            {movies.map((movie, index) => {
                                return <MovieBox key={index} movie={movie} index={index} />
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}