import React from 'react';

export default function MovieItem({ movie, isFavorite, onToggleFavorite, onSelectMovie }) {
    return (
        <div className="movie-card" style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px' }}>
            <h3>{movie.title}</h3>
            <p>Thể loại: {movie.genre} | Năm: {movie.year} | Đánh giá: {movie.rating}</p>
            <div className="movie-actions">
                <button onClick={() => onToggleFavorite(movie.id)}>
                    {isFavorite ? '★ Đã thích' : '☆ Yêu thích'}
                </button>
                <button onClick={() => onSelectMovie(movie)} style={{ marginLeft: '10px' }}>
                    Xem chi tiết
                </button>
            </div>
        </div>
    );
}