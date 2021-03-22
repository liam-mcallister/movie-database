import React from "react";

// A movie poster that will be displayed if a result does not have one of its own
const DEFAULT_MOVIE_POSTER =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  // If a result does not have a poster, display the default poster otherwise display the returned poster
  const poster = movie.Poster === "N/A" ? DEFAULT_MOVIE_POSTER : movie.Poster;

  return (
    <div className="movie">
      <div>
        <img src={poster} alt={`The movie titled: ${movie.Title}`} />
      </div>
      <div className="movie__text">
        <p>{movie.Title}</p>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
