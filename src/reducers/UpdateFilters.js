import initialState from './Store';
export default function (state = initialState(), action='') {
    switch (action.type) {
        case "SEARCH_SONGS":
            {
                let searchKeyword = action.payload.searchKeyword.trim();

                //updating the state
                let data ={...state};
                data.searchKeyword=searchKeyword;
                return data;
            }
        case 'FILTER_SONGS':
            {
                let filterType=action.payload.filterType;
                let selectedValue=action.payload.selectedValue;
                let isChecked=action.payload.isChecked;

                //updating the state
                let data ={...state};
                Object.keys(data.filterArrays).forEach((type)=>{
                    if(type===filterType)
                        if(isChecked===true)
                        data.filterArrays[type].push(selectedValue)
                        else
                        {
                            let index=data.filterArrays[type].indexOf(selectedValue);
                            data.filterArrays[type].splice(index,1);
                        }
                });
                return data;
            }
        default:
        return state;
    }
}