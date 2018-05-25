import axios from 'axios';
import { FETCH_ENTRIES, POST_ENTRY } from './types';

export const fetchEntries = () => async (dispatch) => {
  const res = await axios.get('/api/entries');
  dispatch({type: FETCH_ENTRIES, payload: res.data});
}

export const postEntry = (data) => async (dispatch) => {    
  const res = await axios.post('/api/entries', {
    name: data.name,
    phoneNumber: data.phoneNumber,
    email: data.email,
    url: data.url,
    priceMax: data.priceMax,
    sentListings: []
  });

  dispatch({type: POST_ENTRY, payload: res.data});
}