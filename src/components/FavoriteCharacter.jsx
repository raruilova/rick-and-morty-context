import useRM from "../hooks/useRM";
import FavoriteCharacterList from "./FavoriteCharacterList";

const FavoriteCharacter = () => {
  const {favoriteCharacter} = useRM();
  return (
    <div className="p-10">
      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-16 rounded inline-flex items-center">
          <span className="mr-1">Favoritos</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          {favoriteCharacter.map((favorites) => (
            <FavoriteCharacterList favorites={favorites} key={favorites.id}/>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default FavoriteCharacter;
