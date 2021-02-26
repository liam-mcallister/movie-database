import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Movie from "./components/Movie";
import "./App.css";

const MOVIE_API = "http://www.omdbapi.com/?s=man&apikey=15d31ea";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setError(null);
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=15d31ea`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setError(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  const movieList = movies.map((movie) => (
    <Movie key={`${movie.Year}-${movie.Title}`} movie={movie} />
  ));

  const loadingMsg = <span>Loading...</span>;

  const errorMsg = <span>{error}</span>;

  return (
    <div className="container">
      <div className="header-container">
        <h1>Movie Database Searcher</h1>
      </div>

      <Search search={search} />

      <p className="fav-movies">Sharing a few of our favourite movies</p>

      <div className="movie-container">
        {loading && !error ? loadingMsg : error ? errorMsg : movieList}
      </div>
    </div>
  );
}

export default App;
