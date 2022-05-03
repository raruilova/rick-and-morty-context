import "./App.css";
import List from "./components/List";

function Home() {
  return (
    <div>
        <h1 className="text-9xl text-white uppercase font-bold text-center mt-10">
          Rick and Morty
        </h1>
        <List />
    </div>
  );
}

export default Home;
