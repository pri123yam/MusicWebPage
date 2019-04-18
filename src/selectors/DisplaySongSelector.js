import { createSelector } from 'reselect';
const getAllSongs = (state) => [...state.data.songs];
const getSearchKeyword = (state) => state.data.searchKeyword;
const getFilterGenre = (state) => [...state.data.filterArrays.genre];
const getFilterArtist = (state) => [...state.data.filterArrays.artist];

export const SelectSongsByKeyword = createSelector(
	[getAllSongs, getSearchKeyword], (songs, searchKeyword) => songs.filter(
		song => song.name.includes(searchKeyword) || song.artist.includes(searchKeyword)
	))

export const SelectSongsByGenre = createSelector([SelectSongsByKeyword, getFilterGenre], (songs, genres) => {
	if (genres.length === 0)
		return songs;
	else {
		let genreFilteredSongs = songs.filter(song => {
			return genres.includes(song.genre);
		});
		return genreFilteredSongs;
	}
})

export const SelectSongsByArtist = createSelector([SelectSongsByGenre, getFilterArtist], (songs, artists) => {
	if (artists.length === 0)
		return songs;
	else {
		let artistFilteredSongs = songs.filter(song => {
			return artists.includes(song.artist);
		});
		return artistFilteredSongs;
	}
})
export default SelectSongsByArtist;