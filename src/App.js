import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieSearch from "./MovieSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <MovieSearch defaultMovie="Star Wars" />
        </main>
        <footer className="m-3 text-center">
          Coded by Ashley Blaine,{" "}
          <a
            href="https://github.com/a-blaine/movie-app"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            open sourced
          </a>{" "}
          on GitHub and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
