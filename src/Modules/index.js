import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import searchForm from './searchForm';
import wishlists from './wishlists';
import trips from './trips';
import message from './message';
import modal from './modal';

const rootReducer = combineReducers({
  user,
  search,
  searchForm,
  wishlists,
  trips,
  message,
  modal,
});

export default rootReducer;
