import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className="card" key={movie.id}>
      <img className="card__img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title + '_poster'} />
      <div className="card__content">
        <h3>{movie.original_title}</h3>
        <p>Rating: <strong>{movie.vote_average}</strong></p>
        <p className="card__desc">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Card;
