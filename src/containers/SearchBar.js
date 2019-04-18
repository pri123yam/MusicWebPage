import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchSongs} from '../actions/SearchSong'
import './SearchBar.css'
export class SearchBar extends Component{
    handleChange=(event)=>{
        var searchKey=event.target.value;
        this.props.searchSongs(searchKey);
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({searchSongs},dispatch);
}
export default connect(null,matchDispatchToProps)(SearchBar);