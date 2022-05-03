import useRM from "../hooks/useRM";

const FavoriteCharacterList = ({ favorites }) => {
  const { deleteFavorite, getCharacterId } = useRM();
  return (
    <li>
      <p className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 flex justify-between">
        <button onClick={() => getCharacterId(favorites.id)}>{favorites.name}</button>
        
        <button className="relative ml-1 mr-0 p-1 bg-red-500 hover:bg-red-400 transition-colors rounded-lg text-white"
        onClick={() => deleteFavorite(favorites)}
        >
          Eliminar
        </button>
      </p>
    </li>
  );
};

export default FavoriteCharacterList;
