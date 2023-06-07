import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <div className="d-none">
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          className="img-fluid"
        />
      </div>
      <div>
        <span className="text-capitalize">{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}
