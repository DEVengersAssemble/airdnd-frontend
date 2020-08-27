import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import searchForm from './searchForm';
import wishlists from './wishlists';
import trips from './trips';
import carousel from './carousel';

const rootReducer = combineReducers({
  user,
  search,
  searchForm,
  wishlists,
  trips,
  carousel,
});

export default rootReducer;
