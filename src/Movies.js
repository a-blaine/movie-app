import React from "react";
import MovieCard from "./MovieCard";

export default function Movies({ data, name }) {
  if (data) {
    return (
      <div className="Movies">
        <div className="row">
          {data.map((movie, index) => {
            return (
              <div className="col-3 mt-3 mb-3" key={index}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        No results found for <span className="text-capitalize">{name}</span>
      </div>
    );
  }
}
