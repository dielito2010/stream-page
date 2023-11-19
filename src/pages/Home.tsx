import ActionMovies from "../components/ActionMovies";
import AdventureMovies from "../components/AdventureMovies";
import ComedyMovies from "../components/ComedyMovies";
import LikedMovies from "../components/LikedMovies";
import PopularMovies from "../components/PopularMovies";
import RomanceMovies from "../components/RomanceMovies";

export default function Home() {
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
