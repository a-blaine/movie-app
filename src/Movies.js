import React from "react";
import MovieCard from "./MovieCard";

export default function Movie({ data }) {
  if (data) {
    return (
      <div className="Movie">
        <div className="row">
          {data.map((movie, index) => {
            return (
              <div className="col-3" key={index}>
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
