/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

/* ============================ */
/* COMPONENTS
/* ============================ */
import SearchForm from '../Templates/searchForm.jsx';
import CardImage from '../Templates/cardImage.jsx';
import Masonry from 'react-masonry-component';

export default class CardList extends React.Component {
    
    constructor(props) { super(props); }

    /* =========================================================== */
    /* Verify how many cards did we received from the api
    /* if the total is bigger than 0 then we will
    /* display our card using the Mansory component
    /* https://www.npmjs.com/package/react-masonry-component
    /* =========================================================== */
    /* This function will also handle our navigation through 
    /* images.
    /* =========================================================== */
    loadCards() {
        var childElements = '';

        if(this.props.imagesList.total == 0) {
            childElements = <div className="col-md-12"> 0 images found </div>;
        } else {
            childElements = Object.keys(this.props.imagesList.hits).map((it) => {
                const imageInfo = this.props.imagesList.hits[it];
                return (

                    
                    <Link key={imageInfo.id} 
                        to={{ 
                            pathname: "/"+ imageInfo.id,
                            state: { imageInfo: imageInfo }
                        }}
                    >
                        <CardImage previewURL={imageInfo.previewURL}/>
                    </Link >
                        
                );
            });
        }

        return (
            <Masonry
                className={'list-unstyled list-inline'} // default ''
                elementType={'ul'} // default 'div'
            >
                {childElements}
            </Masonry>
        );
    }

    render (){
        return(
            <div className="pageBody">
                <div className="py-3">
                    <div className="mt-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-header mt-2 mb-0 py-0">
                                        Pictures
                                    </div>
                                    { this.loadCards() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   

}

