import React, { useState } from 'react';
import Card from './card';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchThing = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=17bbf757e897a1222c2ec9975550945c&language=en-US&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="search-form" onSubmit={searchThing}>
        <label htmlFor="query">Search the thing</label>
        <input type="text" id="query" placeholder="Lord of the rings" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
