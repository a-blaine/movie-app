import React from "react";
import MovieCard from "./MovieCard";

export default function Movies({ data, name }) {
  if (data) {
    return (
      <div className="Movies">
        <div className="row">
          {data.map((movie, index) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
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
