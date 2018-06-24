/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';


export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.callParentSearch = this.callParentSearch.bind(this);
    }

    // Keep input state actualized
    updateInputValue(evt) {  this.setState({ inputValue: evt.target.value }); }
    
    callParentSearch () { this.props.getImages(this.state.inputValue) }

    render (){
        return(
            <div className="input-group mb-3">
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} id="searchBox" type="text" className="form-control" placeholder="Search for an image of a food"/>
                <button onClick={this.callParentSearch} className="btn input-button" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    }   

}

