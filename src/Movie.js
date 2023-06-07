import React from "react";

export default function Movie({ data }) {
  console.log(data);

  if (data.length > 0) {
    return (
      <div className="Movie">
        <div className="container">
          {data.map((movie, index) => {
            return (
              <div className="movie-card">
                <div key={index}>
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
                  />
                </div>
                <div>
                  <span>{movie.Type}</span>
                  <h3>{movie.Title}</h3>
                </div>
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
