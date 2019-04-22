import { combineReducers } from 'redux';
import UpdateFilters from './updateFilters';
const rootReducer = combineReducers({
    data: UpdateFilters
});

export default rootReducer;