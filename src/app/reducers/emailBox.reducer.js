import {
  FETCH_MESSAGES,
  FETCH_ALL_MESSAGES
} from '../actions/actionsType';

const initialState = [];

export function EmailBoxReducer(state=initialState, action){
  switch(action.type){
    case FETCH_MESSAGES: 
      return [...state, ...action.payload];
    case FETCH_ALL_MESSAGES: 
      return [...state, ...action.payload];
  }
  return state;
}