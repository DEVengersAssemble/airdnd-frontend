import { combineReducers } from 'redux';
import search from './search';
import main from './main';
import searchHistory from './searchHistory';

const rootReducer = combineReducers({ main, search, searchHistory });

export default rootReducer;
