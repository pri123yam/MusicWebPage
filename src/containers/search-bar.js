import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchSongs} from '../actions/SearchSong'
import './search-bar.css'
import { filterSongs } from '../actions/FilterSong';
class SearchBar extends Component{
    state={
        value:''
    }
    handleChange=(event)=>{
        var searchKey=event.target.value;
        this.props.searchSongs(searchKey,this.props.songs);
        this.setState({value:searchKey});
    }
    render(){
        return(
            <div className="Topcomponent">
                <h2>MUSIC WEB PAGE</h2>
                <input className='InputBox'
                placeholder='type search text here' type="text"
                onChange={this.handleChange}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        songs: state.allsongs
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({searchSongs:searchSongs},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(SearchBar);