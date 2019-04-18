import React from 'react';

import {SelectSongsByArtist} from './DisplaySongSelector';
import {SelectSongsByKeyword} from './DisplaySongSelector';
import {selectSongsByGenre} from './DisplaySongSelector';
import rootReducer from '../reducers/index';


describe('test the working of DisplaySongSelector',()=>{
    let state;
    let SelectedSongs;
    beforeEach(()=>{
        state=rootReducer();
    })
    it('should run SelectSongsByKeyword() correctly',()=>{
        
        state.searchKeyword='ka';
        expect(SelectSongsByKeyword(state)).toEqual()
    })
})