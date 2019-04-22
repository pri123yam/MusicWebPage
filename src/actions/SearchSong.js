export const SearchSongs = (searchKeyword)=>{
    return{
        type:'SEARCH_SONGS',
        payload:{
            searchKeyword:searchKeyword
        }
    }
}