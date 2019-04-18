import React from 'react';
import {MusicCards} from './MusicCards';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({
    adapter: new Adapter()
});

describe("<MusicCards> Component",()=>{
    let initProps;
    let wrapper;
    beforeEach(()=>{
        initProps={
            songs:[
                    {
                        id:1,
                        name:"enchanted",
                        genre:"pop",
                        artist:"taylor swift",
                        duration:"5:53",
                        thumbnail:''
                    },
                    {
                        id:2,
                        genre: "pop",
                        name:"what makes you beautiful",
                        artist:"one direction",
                        duration:"3:18",
                        thumbnail:""
                    }
                ]}
    });

    it("should render <MusicCards> component correctly",()=>{
        wrapper=Enzyme.shallow(<MusicCards
                                    songs={initProps.songs}
                                    />);
        expect(wrapper.debug()).toMatchSnapshot();
    })
})