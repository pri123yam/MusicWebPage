import { combineReducers } from 'redux';
import SongsReducer from './reducer-songs';
import SelectSongs from './reducer-select-songs';
const rootReducer = combineReducers({
    allsongs: SongsReducer,
    filteredsongs: SelectSongs
});

export default rootReducer;