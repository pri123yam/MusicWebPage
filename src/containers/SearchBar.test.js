import React from 'react';
import {SearchBar} from './SearchBar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter: new Adapter()
});
describe('checks the working of search bar', () => {

  const searchMock = jest.fn();
  const wrapper = Enzyme.shallow( <SearchBar 
    SearchSongs = {
      searchMock
    }
    />
  );
  it('should match the previous snapshot', () => {

    expect(wrapper.debug()).toMatchSnapshot();
  })
  it('should renders <SearchBar/> component correctly', () => {
    const event = {
      target: {
        value: 'Search Key'
      }
    };
    wrapper.find('.InputBox').simulate('change', event);
    expect(searchMock).toHaveBeenCalledWith('Search Key');
  });
});