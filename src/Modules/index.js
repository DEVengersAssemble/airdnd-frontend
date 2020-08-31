import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import searchForm from './searchForm';
import wishlists from './wishlists';
import trips from './trips';
import message from './message';
import home from './home';

const rootReducer = combineReducers({
  user,
  search,
  searchForm,
  wishlists,
  trips,
  message,
  home,
});

export default rootReducer;
