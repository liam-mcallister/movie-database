import React from "react";

const DEFAULT_MOVIE_POSTER =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_MOVIE_POSTER : movie.Poster;

  return (
    <div className="movie">
      <div>
        <img src={poster} alt={`The movie titled: ${movie.Title}`} />
        <h2>{movie.Title}</h2>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
