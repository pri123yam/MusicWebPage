import GetFilters from './GetFilters';
import RootReducer from '../reducers/index';

describe('test the working of GetFilters selector', () => {

  let initState;
  let filterList;

  beforeEach(() => {
    initState = JSON.parse(JSON.stringify(RootReducer()));
  })

  it('should return filterList correctly', () => {
    filterList = {
      artist: ["taylor swift", "one direction", "adele", "gajendra verma", "rohan rathore", "ammy virk", "panic! at the Disco", "morgxn", "imagine dragons", "miles davis", "dave brubeck", "james blunt", "lady antebelllum", "chris stapleton"],

      genre: ["pop", "romance", "rock", "jazz", "country"]
    }
    expect(GetFilters(initState)).toEqual(filterList);
  })

  afterEach(() => {
    initState = undefined;
    filterList = undefined;
  })
})