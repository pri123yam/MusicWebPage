import { combineReducers } from 'redux';
import SelectSongs from './UpdateFilters';
const rootReducer = combineReducers({
    data: SelectSongs
});

export default rootReducer;