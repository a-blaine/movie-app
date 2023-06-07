import React from "react";
import MovieCard from "./MovieCard";

export default function Movie({ data }) {
  if (data) {
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
    return <div>No results found</div>;
  }
}
