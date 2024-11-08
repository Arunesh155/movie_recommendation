import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (movie) => {
        setFavorites(prevFavorites => [...prevFavorites, movie]);
    };

    const removeFavorite = (movieId) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
    };

    return (
        <div
            style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                maxWidth: '100%',
                margin: '0 auto',
            }}
        >
            <FavoritesContext.Provider
                value={{ favorites, addFavorite, removeFavorite }}
            >
                {children}
            </FavoritesContext.Provider>
        </div>
    );
};
