import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "../components/Character";
import Navbar from "../components/Navbar";
import RMprovider from "../context/RMprovider";
import Home from "../Home";

const App = () => {
  return (
    <BrowserRouter>
      <RMprovider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </RMprovider>
    </BrowserRouter>
  );
};

export default App;
