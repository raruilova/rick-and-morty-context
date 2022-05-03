import { createContext } from "react";

const initialState = {
    characters: [],
    favoriteCharacter: [],
    character: {}
}

const RMcontext = createContext(initialState);

export { RMcontext, initialState }

