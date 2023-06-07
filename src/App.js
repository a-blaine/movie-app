import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieSearch from "./MovieSearch";

function App() {
  return (
    <div className="App">
      <MovieSearch defaultMovie="Star Wars" />
    </div>
  );
}

export default App;
