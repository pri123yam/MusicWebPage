import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterSongs } from '../actions/FilterSong';
import GetFilters from '../selectors/GetFilters';
import './filter.css';
export class FilterComponent extends Component {
    handleChange = (event) => {
        let {name:filterType, value:selectedValue, checked:isChecked}=event.target;
        this.props.filterSongs(filterType,selectedValue,isChecked);
    }
    render() {
        return (
            <div className='Filterbuttons'>
                {
                    Object.keys(this.props.filters).map((filteredElement) => {
                        return (
                            <div key={filteredElement} className='container'>
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{filteredElement}
                                        <span className="caret"></span></button>
                                    <ul className="dropdown-menu" >
                                        {
                                            this.props.filters[filteredElement].map((listItem) => {
                                                return (
                                                    <li key={listItem}><label><input id={listItem} type="checkbox" name={filteredElement} value={listItem} onChange={this.handleChange} /> {listItem} </label> </li>
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
function matchStateToProps(state) {
    return {
        filters: GetFilters(state)
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ filterSongs }, dispatch);
}
export default connect(matchStateToProps, matchDispatchToProps)(FilterComponent);