import { combineReducers } from 'redux';
import { EmailBoxReducer } from './emailBox.reducer';
import {counter} from './counter.reducer'
export const RootReducer = combineReducers({
  EmailBoxReducer: EmailBoxReducer,
  counter: counter
})