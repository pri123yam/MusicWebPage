import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReducerUpdateFilters from './UpdateFilters';
import initialState from './Store';
Enzyme.configure({
    adapter: new Adapter()
});


describe("Checking proper Updation of FIlters",()=>{

    let initState;
    let finalState;
    beforeEach(()=>{
        initState=initialState();
        finalState=initialState();
    });

    it('should return the initial state when type is Missing', () => {
        expect(ReducerUpdateFilters(undefined, {})).toEqual(finalState);
    });
      
    it('should handle "SEARCH_SONGS" correctly', () => {
        finalState.searchKeyword='hello';
        expect(ReducerUpdateFilters( initState, {
                                                    type:'SEARCH_SONGS',
                                                    payload:{ searchKeyword:"hello" }
                                                }))
                                                .toEqual(finalState);
    });

    it('should handle "FILTER_SONGS" correctly',()=>{
        finalState.filterArrays.genre.push('pop');
        expect(ReducerUpdateFilters(initState,{
                                                type:'FILTER_SONGS',
                                                payload:{
                                                            filterType:'genre',
                                                            selectedValue:'pop',
                                                            isChecked:true
                                                        }
                                               })).toEqual(finalState);
    });
        
    
    afterEach(()=>{
                    initState=undefined;
                    finalState=undefined;
    })
})

