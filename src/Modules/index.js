import { combineReducers } from 'redux';
import search from './search';
import main from './main';

const rootReducer = combineReducers({ main, search });

export default rootReducer;
