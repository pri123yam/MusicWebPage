import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './containers/SearchBar';
import FilterComponent from './containers/Filter';
import MusicCards from './containers/MusicCards';
Enzyme.configure({
    adapter: new Adapter()
});


describe('To check the rendering of connected App components correctly', () => {
    const componentApp = Enzyme.shallow( < App / > );

    it('checks that the previous snapshot of App matches', () => {
        expect(componentApp.debug()).toMatchSnapshot();
    })

    it('checks that the search bar is rendered once', () => {
        expect(componentApp.find(SearchBar)).toHaveLength(1);
    })

    it('checks that the Filter component is rendered once', () => {
        expect(componentApp.find(FilterComponent)).toHaveLength(1);
    })

    it('checks that the Music cards is rendered once', () => {
        expect(componentApp.find(MusicCards)).toHaveLength(1);
    })
});