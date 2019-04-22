import UpdateFilters from './updateFilters';
import {initialState} from './Store';


describe("Checking proper Updation of FIlters", () => {

  let initState;
  let finalState;
  beforeEach(() => {
    initState = initialState;
    finalState = initialState;
  });

  it('should return the initial state when type is Missing', () => {
    expect(UpdateFilters(undefined, {})).toEqual(finalState);
  });

  it('should handle "SEARCH_SONGS" correctly', () => {
    finalState.searchKeyword = 'hello';
    expect(UpdateFilters(initState, {
        type: 'SEARCH_SONGS',
        payload: {
          searchKeyword: "hello"
        }
      }))
      .toEqual(finalState);
  });

  it('should handle "FILTER_SONGS" correctly', () => {
    finalState.filterArrays.genre.push('pop');
    expect(UpdateFilters(initState, {
      type: 'FILTER_SONGS',
      payload: {
        filterType: 'genre',
        selectedValue: 'pop',
        isChecked: true
      }
    })).toEqual(finalState);
  });


  afterEach(() => {
    initState = undefined;
    finalState = undefined;
  })
})