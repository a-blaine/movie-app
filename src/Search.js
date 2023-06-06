import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Search() {
  const [movieName, setMovieName] = useState(" ");

  function SearchMovies(response) {
    console.log(response.data);
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
      <h1>Movieland</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a movie"
          autoFocus="off"
          autoComplete="off"
          onChange={updateMovieName}
        />
      </form>
      <Results />
    </div>
  );
}
