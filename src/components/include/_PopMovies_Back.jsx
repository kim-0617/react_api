import React from 'react';

const MovieBox = ({ movie, index }) => {
    if (index > 4) return;
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

export const PopMovies = ({ movies }) => {
    return (
        <div className='pop__inner'>
            <div className="container">
                <h2>오늘의 인기영화</h2>
                <div className="pop__inner">
                    <ul>
                        {movies.map((movie, index) => {
                            return <MovieBox key={index} movie={movie} index={index} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}