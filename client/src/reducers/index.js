import { combineReducers } from 'redux';
import { entries, postedEntry } from './entryReducer';


export default combineReducers({
  entries: entries,
  postedEntry: postedEntry
});