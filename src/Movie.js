import React from "react";

export default function Movie({ movieData }) {
  console.log(movieData);

  return (
    <div className="Movie">
      <div className="container">
        <div className="movie-card">
          <p>{movieData.Year}</p>
        </div>
        <div>
          <img
            src={
              movieData.Poster !== "N/A"
                ? movieData.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movieData.Title}
          />
        </div>
        <div>
          <span>{movieData.Type}</span>
          <h3>{movieData.Title}</h3>
        </div>
      </div>
    </div>
  );
}
