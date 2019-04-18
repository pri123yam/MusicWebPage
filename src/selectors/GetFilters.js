import {createSelector} from 'reselect';
const getAllsongs = (state) => [...state.data.songs];
const GetFilters = createSelector( [getAllsongs] , (songs) =>{
    let filterList={
        artist:[],
        genre:[]
    };
    songs.forEach((song)=>{
        if(!filterList.artist.includes(song.artist))
            filterList.artist.push(song.artist);
        if(!filterList.genre.includes(song.genre))
            filterList.genre.push(song.genre);
    });
    return filterList;
})

export default GetFilters;