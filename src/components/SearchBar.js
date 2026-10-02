import React, { useEffect, useRef } from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="search-bar" style={{ marginBottom: '10px' }}>
            <label>Tìm kiếm phim: </label>
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập tên phim..."
            />
        </div>
    );
}