import {
  FETCH_ORGANIZER_MESSAGES,
  FETCH_ORGANIZER_ALL_MESSAGES,
  TRASH_MESSAGE
} from '../actions/actionsType';

const initialState = [];

export function EmailBoxReducer(state=initialState, action){
  switch(action.type){
    case FETCH_ORGANIZER_MESSAGES: 
      return [...state, ...action.payload];
    case FETCH_ORGANIZER_ALL_MESSAGES: 
      return [...state, ...action.payload];
    case TRASH_MESSAGE:
    	return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
  }
  return state;
}