import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, favorites, onToggleFavorite, onSelectMovie }) {
    if (movies.length === 0) {
        return <p>Không tìm thấy bộ phim nào.</p>;
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    isFavorite={favorites.includes(movie.id)}
                    onToggleFavorite={onToggleFavorite}
                    onSelectMovie={onSelectMovie}
                />
            ))}
        </div>
    );
}