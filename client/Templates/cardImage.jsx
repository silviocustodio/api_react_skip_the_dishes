/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';


export default class CardImage extends React.Component {

    render (){
        return(
            <li className="list-inline-item mt-2 img-card">
                <img src={this.props.previewURL} alt=""/>
                <span className="see-more">
                    See more
                </span>
            </li>
        );
    }   

}

