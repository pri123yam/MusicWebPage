export const FilterSongs=(filterType,selectedValue,isChecked)=>{
    return{
        type:'FILTER_SONGS',
        payload:{
            filterType:filterType,
            selectedValue:selectedValue,
            isChecked:isChecked
        }
    }
}