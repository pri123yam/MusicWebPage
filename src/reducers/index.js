import { combineReducers } from 'redux';
import SongsReducer from './ReducerSongs';
import SelectSongs from './ReducerSelectSongs';
const rootReducer = combineReducers({
    data: SelectSongs
});

export default rootReducer;