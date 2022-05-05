import { useState } from "react";
import useRM from "../hooks/useRM";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { searchCharacter, getData } = useRM();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Escribe un personaje");
      return;
    }
    searchCharacter(search);
    setSearch("");
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-1/2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="small_outlined"
            className="block mb-0 mt-10 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 placeholder:text-white"
            placeholder="Busca un personaje..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="submit"
            value="Buscar"
            className="cursor-pointer mb-0 float-right py-2 px-1 bg-indigo-600 rounded mt-2 ml-2 text-white hover:bg-indigo-500"
          />
        </form>
        <button
          onClick={() => getData()}
          className="float-right py-2 px-1 bg-emerald-700 mt-2 rounded text-white hover:bg-emerald-600"
        >
          Todos los personajes
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
