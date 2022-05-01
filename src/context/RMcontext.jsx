import { createContext } from "react";

const initialState = {
    characters: [],
    favoriteCharacter: []
}

const RMcontext = createContext(initialState);

export { RMcontext, initialState }

