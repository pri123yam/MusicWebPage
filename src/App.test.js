import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './containers/SearchBar';
import FilterComponent from './containers/filter';
import MusicCards from './containers/MusicCards';
Enzyme.configure({ adapter: new Adapter() });

describe('<App/>',()=>{
    it('should render connected <App/> components correctly',()=>{
        const componentApp=Enzyme.shallow(<App/>);
        expect(componentApp.debug()).toMatchSnapshot();
        expect(componentApp.find(SearchBar)).toHaveLength(1);
        expect(componentApp.find(FilterComponent)).toHaveLength(1);
        expect(componentApp.find(MusicCards)).toHaveLength(1);
    });
});