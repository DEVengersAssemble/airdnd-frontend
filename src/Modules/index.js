import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import searchForm from './searchForm';

const rootReducer = combineReducers({ user, search, searchForm });

export default rootReducer;
