import { combineReducers } from 'redux';
import { EmailBoxReducer } from './emailBox.reducer';
import {counter} from './counter.reducer';
import {OrganizerEmailBoxReducer} from './organizerEmailBox.reducer';
export const RootReducer = combineReducers({
  EmailBoxReducer: EmailBoxReducer,
  counter: counter,
  OrganizerEmailBoxReducer: OrganizerEmailBoxReducer
});