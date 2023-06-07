import React from "react";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <div className="year">
        <p>{movie.Year}</p>
      </div>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
        className="img-fluid"
      />
      <div className="card-footer">
        <span className="text-uppercase">{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}
