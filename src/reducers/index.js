import { combineReducers } from 'redux';
import UpdateFilters from './UpdateFilters';
const rootReducer = combineReducers({
    data: UpdateFilters
});

export default rootReducer;