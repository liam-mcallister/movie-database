import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Movie from "./components/Movie";
import "./App.css";

// API key for the initial load results
const MOVIE_API = "https://www.omdbapi.com/?s=man&apikey=15d31ea";

function App() {
  // Loading state which is set to true
  const [loading, setLoading] = useState(true);
  // Movies state that is set to an empty array
  const [movies, setMovies] = useState([]);
  // Error state which is set to null
  const [error, setError] = useState(null);

  // An effect that fetches movies from OMDB with the search term 'man'
  // + Parse the response as JSON
  // + Then update the movies state with the returned array of movies and set the loading state to false
  useEffect(() => {
    fetch(MOVIE_API)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  // Callback function which is called from the handleSubmit function in Search.js
  // + The input value is passed into the function
  // + Sets the loading state to true
  // + Sets the error state to null
  // + The input value is passed into the fetch request as part of the API key
  // + Parse the response as JSON
  // + If the returned object's response is true
  // + Then update the movies state with the returned array of movies and set the loading state to false
  // + Otherwise set the error state to the returned error and set the loading state to false
  const search = (searchValue) => {
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=15d31ea`)
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

  // Map through the movies state and create Movie components from each one
  const movieList = movies.map((movie) => (
    <Movie key={`${movie.Year}-${movie.Title}`} movie={movie} />
  ));

  // Store the loading text in a span element to be displayed when needed
  const loadingMsg = <span>Loading...</span>;

  // Store the error state in a span element to be displayed when needed
  const errorMsg = <span>{error}</span>;

  return (
    <div className="container">
      <div className="header-container">
        <h1>Movie Finder</h1>
      </div>

      {/* Pass the search function down to Search.js viva props */}
      <Search search={search} />

      <p className="fav-movies">Sharing a few of our favourite movies</p>

      <div className="movie-container">
        {/*
          If loading state = true / error state = false, then display loadingMsg 
          + Else if error = true, then display errorMsg
          + Else display movieList
        */}
        {loading && !error ? loadingMsg : error ? errorMsg : movieList}
      </div>
    </div>
  );
}

export default App;
