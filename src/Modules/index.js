import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import searchForm from './searchForm';
import wishlists from './wishlists';

const rootReducer = combineReducers({ user, search, searchForm, wishlists });

export default rootReducer;
