import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  GET_CHARACTER,
  GET_CHARACTER_ID,
  SEARCH_CHARACTER,
} from "../types";
import { initialState, RMcontext } from "./RMcontext";
import { rmReducer } from "./rmReducer";
import swal from "sweetalert";

const RMprovider = ({ children }) => {
  const [state, dispatch] = useReducer(rmReducer, initialState);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      dispatch({ type: GET_CHARACTER, payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorites = (character) => {
    dispatch({ type: ADD_CHARACTER, payload: character });
    swal("Añadido a favoritos!", "Correctamente",  "success");
  };

  const deleteFavorite = (character) => {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado, deberas añadir a favoritos tu personaje!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch({ type: DELETE_CHARACTER, payload: character });
        swal("Poof! Tu personaje ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("Tu personaje favorito no ha sido eliminado!");
      }
    });
    
  };

  const getCharacterId = async (id) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      dispatch({ type: GET_CHARACTER_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
    navigate(`/character/${id}`);
  };

  const searchCharacter = async (character) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character.toLowerCase()}`);
      const data = await response.json();
      dispatch({ type: SEARCH_CHARACTER, payload: data.results });
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <RMcontext.Provider
      value={{
        ...state,
        getData,
        addFavorites,
        deleteFavorite,
        getCharacterId,
        searchCharacter
      }}
    >
      {children}
    </RMcontext.Provider>
  );
};

export default RMprovider;
