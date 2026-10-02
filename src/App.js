import React, { useState, useMemo } from 'react';
import { movies } from './datas/movies';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function MainContent() {
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All Genres');
    const [sortBy, setSortBy] = useState('Default');
    const [favorites, setFavorites] = useLocalStorage('movie_favorites', []);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Lấy danh sách thể loại độc lập từ dữ liệu phim
    const genres = [...new Set(movies.map((m) => m.genre))];

    // Xử lý thêm/xóa yêu thích
    const handleToggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );
    };

    // Lọc và sắp xếp phim sử dụng useMemo đúng yêu cầu bài toán
    const filteredMovies = useMemo(() => {
        let result = movies.filter((movie) => {
            const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGenre = selectedGenre === 'All Genres' || movie.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });

        if (sortBy === 'high-low') {
            result.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'low-high') {
            result.sort((a, b) => a.rating - b.rating);
        }

        return result;
    }, [searchTerm, selectedGenre, sortBy]);

    return (
        <div className={`app ${theme}`} style={{ padding: '20px' }}>
            <Header />
            <div className="container" style={{ marginTop: '20px' }}>
                {/* Search nằm ở dòng riêng */}
                <div style={{ marginBottom: '10px' }}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>

                {/* Genre và Sort nằm chung một dòng ngang */}
                <div className="controls" style={{ display: 'flex', gap: '20px', marginBottom: '15px', alignItems: 'center' }}>
                    <GenreFilter
                        genres={genres}
                        selectedGenre={selectedGenre}
                        setSelectedGenre={setSelectedGenre}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </div>

                <p><strong>Hiển thị: Tổng số phim: {filteredMovies.length} | Yêu thích: {favorites.length}</strong></p>

                <div className="main-layout">
                    <MovieList
                        movies={filteredMovies}
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                        onSelectMovie={setSelectedMovie}
                    />
                    <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <MainContent />
        </ThemeProvider>
    );
}