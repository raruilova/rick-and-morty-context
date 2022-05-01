import { useEffect } from "react";
import useRM from "../hooks/useRM";
import CharacterList from "./CharacterList";

const List = () => {
    const { getData, characters } = useRM();
    useEffect(() => {
        getData();
    }, []);
    return (
       <div className="grid ml-10 gap-3 mt-10 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 mr-5 md:grid-cols-3 place-content-center">
       {characters.map((character) => (
        <CharacterList character={character} key={character.id}/>
       ))}
       </div>
    );
}

export default List;