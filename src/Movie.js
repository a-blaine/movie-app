import React from "react";
import MovieCard from "./MovieCard";

export default function Movie({ data }) {
  console.log(data);

  if (data.length > 0) {
    return (
      <div className="Movie">
        <div className="container">
          {data.map((movie, index) => {
            return (
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div>No movies found with the</div>
      </div>
    );
  }
}
