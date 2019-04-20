import { combineReducers } from 'redux';
import updateFilters from './updateFilters';
const rootReducer = combineReducers({
    data: updateFilters
});

export default rootReducer;