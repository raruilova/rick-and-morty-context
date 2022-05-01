import Navbar from "./components/Navbar";
import "./App.css";
import RMprovider from "./context/RMprovider";
import List from "./components/List";

function App() {
  return (
    <div>
      <RMprovider>
        <Navbar />
        <h1 className="text-9xl text-white uppercase font-bold text-center mt-10">
          Rick and Morty
        </h1>
        <List />
      </RMprovider>
    </div>
  );
}

export default App;
