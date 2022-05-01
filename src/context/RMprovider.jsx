import { useReducer } from "react";
import { ADD_CHARACTER, DELETE_CHARACTER, GET_CHARACTER } from "../types";
import { initialState, RMcontext } from "./RMcontext"
import { rmReducer } from "./rmReducer";

const RMprovider = ({children}) => {
    const [state, dispatch] = useReducer(rmReducer, initialState);

    const getData = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        dispatch({type: GET_CHARACTER, payload: data.results});
    }

    const addFavorites = (character) => {
        dispatch({type: ADD_CHARACTER, payload: character});
    }

    const deleteFavorite = (character) => {
        dispatch({type: DELETE_CHARACTER, payload: character});
    }

    
    return (
        <RMcontext.Provider value={{
            ...state,
            getData,
            addFavorites,
            deleteFavorite
        }}>
            {children}
        </RMcontext.Provider>
    );
}

export default RMprovider;