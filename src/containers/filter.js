import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterSongs } from '../actions/FilterSong';
import './filter.css';
class FilterComponent extends Component {
    list = {
        genre: { 'pop': false, 'jazz': false, 'romance': false, 'country': false },
        artist: { 'gajendra verma': false, 'miles davis': false,"ammy virk":false,"rohan rathore":false,"one direction":false, 'adele': false, 'taylor swift': false },
    }
    handleChange = (event) => {
        let filterKeyword = event.target.name;
        const isChecked = event.target.checked;
        Object.keys(this.list).map((listitem) => {
            Object.keys(this.list[listitem]).map((item) => {
                if (item === filterKeyword)
                    this.list[listitem][item] = isChecked;
            })
        });
        let filterArray = [];
        Object.keys(this.list).map((listitem) => {
            Object.keys(this.list[listitem]).map((item) => {
                if (this.list[listitem][item] === true)
                    filterArray.push(item);
            })
        });
        this.props.filterSongs(this.props.allsongs, filterArray);
    }
    render() {
        return (
            <div className='Filterbuttons'>
                {
                    Object.keys(this.list).map((filteredElements) => {
                        return (
                            <div className='container'>
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{filteredElements}
                                        <span className="caret"></span></button>
                                    <ul className="dropdown-menu" >
                                        {
                                            Object.keys(this.list[filteredElements]).map((listItem) => {
                                                return (
                                                    <li key={listItem}><label><input type="checkbox" name={listItem} onChange={this.handleChange} /> {listItem} </label> </li>
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

function mapStateToProps(state) {
    return {
        allsongs: state.allsongs,
        filteredsongs: state.filteredsongs
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ filterSongs: filterSongs }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(FilterComponent);