import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Search({ defaultMovie }) {
  const [movieName, setMovieName] = useState(defaultMovie);

  function search(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMovieName(event.target.value);
  }

  const apiKey = "cdce1964";
  let apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`;
  axios.get(apiUrl).then(search(movieName));

  return (
    <div className="Search">
      <h1>Movieland</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a movie"
          autoFocus="off"
          autoComplete="off"
        />
      </form>
      <Results />
    </div>
  );
}
