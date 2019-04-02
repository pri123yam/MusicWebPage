export const searchSongs = (searchKeyword,songs)=>{
    return{
        type:'SEARCH_SONGS',
        payload:{
            searchKeyword:searchKeyword,
            songs:songs
        }
    }
}