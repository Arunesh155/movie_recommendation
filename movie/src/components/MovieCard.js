import React, { useContext, useState } from 'react';
import { FavoritesContext } from '../FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some(fav => fav.id === movie.id);
    const [isHovered, setIsHovered] = useState(false);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                cursor: 'pointer',
                marginBottom: '20px',
                maxWidth: '250px',
                position: 'relative', // Position for the favorite button
                overflow: 'hidden', // To hide content overflow
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '10px',
                }}
            />
            <div
                style={{
                    display: isHovered ? 'block' : 'none',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '8px',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'opacity 0.3s ease',
                    overflowY: 'auto', // Allow vertical scrolling if content overflows
                }}
            >
                <h3
                    style={{
                        fontSize: '1.2em',
                        color: '#fff',
                        margin: '10px 0',
                    }}
                >
                    {movie.title}
                </h3>
                <p
                    className="movie-description"
                    style={{
                        fontSize: '0.9em',
                        color: '#ccc',
                        marginBottom: '10px',
                        maxHeight: isHovered ? 'none' : '60px', // Remove height restriction on hover
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {movie.overview || 'No description available.'}
                </p>
                <p
                    className="movie-rating"
                    style={{
                        fontSize: '0.9em',
                        fontWeight: 'bold',
                        color: '#ffcc00',
                        marginBottom: '15px',
                    }}
                >
                    <strong>Rating:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10
                </p>
            </div>

            <button
                onClick={handleFavoriteClick}
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                {isFavorite ? (
                    <FaHeart size={24} color="#ff4b5c" />
                ) : (
                    <FaRegHeart size={24} color="#007bff" />
                )}
            </button>
        </div>
    );
};

export default MovieCard;
