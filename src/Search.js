import React from "react";
import Results from "./Results";

export default function Search() {
  return (
    <div className="Search">
      <h1>Movieland</h1>
      <form>
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
