import { FETCH_ENTRIES, POST_ENTRY } from '../actions/types';

export const entries = (state = null, action) => {
  switch(action.type) {
    case FETCH_ENTRIES:
      return action.payload || false;
    default:
      return state;
  }
}

export const postedEntry = (state = null, action) => {
  switch(action.type) {
    case POST_ENTRY:
      return action.payload || false;
    default:
      return state;
  }
}