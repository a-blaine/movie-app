import React, { useState } from "react";
import Movie from "./Movie";
import axios from "axios";

export default function Search() {
  const [movieName, setMovieName] = useState(" ");
  const [movieData, setMovieData] = useState([]);

  function searchMovies(response) {
    setMovieData(response.data);
  }

  function updateMovieName(event) {
    setMovieName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `http://www.omdbapi.com/?apikey=c032e2d7&s=${movieName}`;
    axios.get(apiUrl).then(searchMovies);
  }

  return (
    <div className="Search">
      <h1>Movie Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a movie"
          autoFocus="off"
          autoComplete="off"
          onChange={updateMovieName}
        />
      </form>
      <Movie movieData={movieData[0]} />
    </div>
  );
}
