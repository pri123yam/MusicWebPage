import React from 'react';
import { FilterComponent } from './Filter';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
            }
          }
          filterSongsMock = jest.fn();
          wrapper = Enzyme.shallow( < FilterComponent filters = {
              initProps.filters
            }
            FilterSongs = {
              filterSongsMock
            }
            />);   
          });

        it('should render <FilterComponent/> component correctly', () => {
          expect(wrapper.debug()).toMatchSnapshot();
        });

        it('should trigger the filterSongs() correctly', () => {

          const event = {
            target: {
              name: 'genre',
              value: 'good',
              isChecked: true
            }
          }
          wrapper.find('.dropdown-menu').find('input').at(3).simulate('change', event);
          expect(filterSongsMock).toHaveBeenCalled();
        }) 
        afterEach(() => {
          initProps = {};
          filterSongsMock = undefined;
          wrapper = undefined;
        });
      });