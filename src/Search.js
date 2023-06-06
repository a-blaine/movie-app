import React, { useState } from "react";
import Movie from "./Movie";
import axios from "axios";

export default function Search() {
  const [movieName, setMovieName] = useState(" ");
  const [movieData, setMovieData] = useState({});

  function SearchMovies(response) {
    setMovieData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=c032e2d7`;
    axios.get(apiUrl).then(SearchMovies);
  }

  function updateMovieName(event) {
    setMovieName(event.target.value);
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
      <Movie movieData={movieData} />
    </div>
  );
}
