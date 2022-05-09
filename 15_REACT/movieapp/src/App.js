import "./App.css";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* <Banner />
      <MoviesList/> */}
      <Favourites />
    </>

  )
}

export default App;
