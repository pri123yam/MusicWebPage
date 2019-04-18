import React from 'react';
import {FilterComponent} from './filter';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {filterSongs} from '../actions/FilterSong'
Enzyme.configure({
    adapter: new Adapter()
});

describe('<FilterComponent/>', () => {
            let initProps;
            let wrapper;
            let filterSongsMock;
            beforeEach(() => {
                initProps = {
                    filters: {
                        artist: ['one', 'two', 'three'],
                        genre: ['good', 'bad']
                    }}
                filterSongsMock= jest.fn();
            });

            const event={
                target:{
                    name:'genre',
                    value:'good',
                    isChecked:true
                }
            }

            it('should render <FilterComponent/> component correctly', () => {
                    wrapper = Enzyme.shallow(<FilterComponent 
                                                        filters = {initProps.filters}
                                                        filterSongs={filterSongsMock}
                                                    />);                        
                    
                    expect(wrapper.debug()).toMatchSnapshot();
            });

            it('should trigger the filterSongs() correctly',()=>{
                console.log(wrapper.debug());
                wrapper.debug().find('#good').simulate('change',event);
                expect(filterSongsMock).toHaveBeenCalled();
            })
            afterEach(() => {
                    initProps={};
                    filterSongsMock=undefined;
                });
            });