export const searchSongs = (searchKeyword)=>{
    return{
        type:'SEARCH_SONGS',
        payload:{
            searchKeyword:searchKeyword
        }
    }
}