import React from 'react';
import {SearchBar} from './SearchBar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
    adapter: new Adapter()
});
describe('<SearchBar/>', () => {

    it('should renders <SearchBar/> component correctly', () => {
        const searchMock=jest.fn();
        const event = {
            target: {
                value: 'Search Key'
            }
        };
        const wrapper = Enzyme.shallow(
            <SearchBar
                searchSongs={searchMock}
            />
        );
        expect(wrapper.debug()).toMatchSnapshot();
        wrapper.find('.InputBox').simulate('change', event);
        expect(searchMock).toHaveBeenCalledWith('Search Key');
    });
});