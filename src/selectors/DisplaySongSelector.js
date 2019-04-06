import { createSelector } from 'reselect';
import { func } from 'prop-types';

const getAllSongs = (state) => state.data.songs;
const getSearchKeyword = (state) => state.data.searchKeyword;
const getFilterGenre = (state) => [...state.data.filterArrays.genre];
const getFilterArtist = (state) => [...state.data.filterArrays.artist];

const selectSongsByKeyword = createSelector(
    [getAllSongs, getSearchKeyword], (songs, searchKeyword) => songs.filter(
        song => song.name.includes(searchKeyword) || song.artist.includes(searchKeyword)
    ))

const selectSongsByGenre = createSelector([selectSongsByKeyword, getFilterGenre], (songs, genres) => {
    if (genres.length === 0)
        return songs;
    else {
        console.log(genres);
        let genreFilteredSongs=songs.filter(song => {
            let flag=false;
            for(let i=0;i<genres.length;i++)
            {
                if(song.genre.includes(genres[i]))
                {
                    flag=true;
                    break;
                }
            }
            return flag;
        }
        );
        return genreFilteredSongs;
    }
})

const selectSongsByArtist = createSelector([selectSongsByGenre,getFilterArtist],(songs,artists)=>{
    if (artists.length === 0)
        return songs;
    else {
        let artistFilteredSongs=songs.filter(song => {
            let flag=false;
            for(let i=0;i<artists.length;i++)
            {
                if(song.artist.includes(artists[i]))
                {
                    flag=true;
                    break;
                }
            }
            return flag;
        }
        );
        return artistFilteredSongs;
    }
})
export default selectSongsByArtist;