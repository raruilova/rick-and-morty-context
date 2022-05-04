import "./App.css";
import List from "./components/List";
import SearchBar from "./components/SearchBar";

function Home() {
  return (
    <div>
        <h1 className="text-9xl text-white uppercase font-bold text-center mt-10">
          Rick and Morty
        </h1>
        <SearchBar />
        <List />
    </div>
  );
}

export default Home;
