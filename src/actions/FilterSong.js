export const filterSongs=(songs,filterArray)=>{
    console.log(songs);
    return{
        type:'FILTER_SONGS',
        payload:{
            songs:songs,
            filterArray:filterArray
        }
    }
}