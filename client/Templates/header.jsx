/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';

/* ============================ */
/* COMPONENTS
/* ============================ */
import SearchForm from '../Templates/searchForm.jsx';

export default class Header extends React.Component {  
    render () {

        return(
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-6 offset-3 align-self-center">
                        <span className="apiName">
                            Skip the Dishes
                        </span>
                        <SearchForm getImages={this.props.getImages}/>
                    </div>
                </div>
            </div>
        );
    }   

}

