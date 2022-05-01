import {GET_CHARACTER, ADD_CHARACTER, DELETE_CHARACTER} from '../types';

export function rmReducer(state, action) {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                characters: action.payload
            }
        
        case ADD_CHARACTER:
            return {
                ...state,
                favoriteCharacter: [...state.favoriteCharacter, action.payload]
            }

        case DELETE_CHARACTER:
            return {
                ...state,
                favoriteCharacter: state.favoriteCharacter.filter((deleteChar) => deleteChar.id !== action.payload.id)
            }
        default:
            state;
    }
}