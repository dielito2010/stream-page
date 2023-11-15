import "./App.css";
import ActionMovies from "./components/ActionMovies";
import AdventureMovies from "./components/AdventureMovies";
import ComedyMovies from "./components/ComedyMovies";
import LikedMovies from "./components/LikedMovies";
import RomanceMovies from "./components/RomanceMovies";
import PopularMovies from "./components/popularMovies";

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
