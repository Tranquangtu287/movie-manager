import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`header ${theme}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Mini Movie Manager</h1>
            <button onClick={toggleTheme} style={{ padding: '6px 12px', cursor: 'pointer' }}>
                {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
            </button>
        </header>
    );
}