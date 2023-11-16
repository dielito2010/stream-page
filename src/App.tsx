import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ActionMovies from "./components/ActionMovies";
import AdventureMovies from "./components/AdventureMovies";
import ComedyMovies from "./components/ComedyMovies";
import LikedMovies from "./components/LikedMovies";
import RomanceMovies from "./components/RomanceMovies";
import PopularMovies from "./components/PopularMovies";

function App() {
  return (
    <main>
      <PopularMovies />
      <LikedMovies />
      <ComedyMovies />
      <ActionMovies />
      <AdventureMovies />
      <RomanceMovies />
    </main>
  );
}

export default App;
