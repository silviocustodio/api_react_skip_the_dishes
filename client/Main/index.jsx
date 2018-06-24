/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';

/* ============================ */
/* REDUX DEPENDENCIES
/* ============================ */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getImagesList} from './ImagesAction';

/* ============================ */
/* COMPONENTS 
/* ============================ */
import Header from '../Templates/header.jsx';
import CardList from '../Templates/cardList.jsx';
import Pagination from "react-js-pagination";

class Main extends React.Component {
    constructor (props){
        super(props);
        this.getImages = this.getImages.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.state = { 
            activePage: 1, 
            actualSearch: '',
        };
    }

    /* =========================================================== */
    /* Get a simple list when our page loads
    /* =========================================================== */
    componentWillMount (){ this.props.getImagesList(""); }

    handlePageChange(pageNumber) {
        this.props.getImagesList(this.state.actualSearch, pageNumber)
        this.setState({activePage: pageNumber});
    }

    getImages (search) { 
        this.props.getImagesList(search, this.state.pageNumber) 
        this.setState({actualSearch : search})
    }

    render (){
        if (Object.keys(this.props.imagesList).length === 0) {
            return( 
                <div>   
                    <Header getImages={this.getImages}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <Header getImages={this.getImages}/>
                    <CardList imagesList={this.props.imagesList}/>
                    <div className="container">
                        
                        <div className="row justify-content-center">
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={450}
                                pageRangeDisplayed={5}
                                itemClass='page-item'
                                linkClass='page-link'
                                onChange={this.handlePageChange}
                            />
                        </div>

                    </div>
                </div>
            );
        }  
    }   

}

// Map the data in our state (ImagesReducer) to our Component
const mapStateToProps = state => ({ imagesList: state.images.imagesList})
// Pass our action as a prop to our component
const mapDispatchToProps = dispatch => bindActionCreators({ getImagesList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)