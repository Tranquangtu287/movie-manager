import React from 'react';

export default function GenreFilter({ genres, selectedGenre, setSelectedGenre, sortBy, setSortBy }) {
    return (
        <div className="filters" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div className="genre-filter">
                <label>Thể loại: </label>
                <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="All Genres">Tất cả thể loại</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <div className="sort-filter">
                <label>Sắp xếp: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="Default">Mặc định</option>
                    <option value="high-low">Đánh giá: Cao → Thấp</option>
                    <option value="low-high">Đánh giá: Thấp → Cao</option>
                </select>
            </div>
        </div>
    );
}