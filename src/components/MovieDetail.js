import React from 'react';

export default function MovieDetail({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className="movie-detail-section" style={{ border: '2px dashed #333', padding: '15px', marginTop: '20px' }}>
            <h2>Movie Details</h2>
            <p><strong>Title:</strong> {movie.title}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Duration:</strong> {movie.duration} phút</p>
            <p><strong>Description:</strong> {movie.description}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}