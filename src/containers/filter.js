import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterSongs } from '../actions/FilterSong';
import './filter.css';
class FilterComponent extends Component {
    list = {
        genre: [ "pop",'jazz','romance','country','rock'],
        artist: ["gajendra verma",'miles davis','ammy virk','rohan rathore','one direction','adele','taylor swift']
    }
    handleChange = (event) => {
        let filterType = event.target.name;
        let selectedValue=event.target.value;
        const isChecked = event.target.checked;
        this.props.filterSongs(filterType,selectedValue,isChecked);
    }
    render() {
        return (
            <div className='Filterbuttons'>
                {
                    Object.keys(this.list).map((filteredElement) => {
                        return (
                            <div className='container'>
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{filteredElement}
                                        <span className="caret"></span></button>
                                    <ul className="dropdown-menu" >
                                        {
                                            this.list[filteredElement].map((listItem) => {
                                                return (
                                                    <li key={listItem}><label><input type="checkbox" name={filteredElement} value={listItem} onChange={this.handleChange} /> {listItem} </label> </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ filterSongs: filterSongs }, dispatch);
}
export default connect(null, matchDispatchToProps)(FilterComponent);