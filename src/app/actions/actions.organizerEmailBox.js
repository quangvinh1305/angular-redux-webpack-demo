import { FETCH_ORGANIZER_MESSAGES, FETCH_ORGANIZER_ALL_MESSAGES, TRASH_MESSAGE } from './actionsType';
export function fetchMessages(data){
  return {
    type: FETCH_ORGANIZER_MESSAGES,
    payload: data
  };
}


export function fetchAllMessages(data){
  return {
    type: FETCH_ORGANIZER_ALL_MESSAGES,
    payload: data
  };
}

export function trashMessage(data){
	return {
    type: TRASH_MESSAGE,
    payload: data
  };
}