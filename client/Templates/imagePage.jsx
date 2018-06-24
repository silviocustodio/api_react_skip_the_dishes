/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';

export default class ImagePage extends React.Component {


    render() {
        const imageInfo = this.props.location.state.imageInfo;
        return (
            <div>
                <div className="container-fluid px-0">
                    <nav className="navbar navbar-default" >
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Details</a>
                        </div>
                    </nav>
                </div>
                
                <div className="row mt-3 px-3">
                    <div className="col-12 col-md-8">
                        <div >
                            <img width="100%" src={imageInfo.largeImageURL} alt=""/>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="row justify-content-center px-3">
                            <div className="col-lg-8 col-12 mt-3 mt-lg-0 box ">
                                <div className="row">
                                    <div className="col-12 box-header">
                                        Image Information
                                        <hr/>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="col-12">
                                
                                        <div className="row my-1">
                                            <div className="info"> Image Type : </div>
                                            <div className="values"> { imageInfo.type } </div>
                                        </div>
                                        <div className="row my-1">
                                            <div className="info"> Views : </div>
                                            <div className="values"> { imageInfo.views } </div>
                                        </div>
                                        <div className="row my-1">
                                            <div className="info"> Photographer : </div>
                                            <div className="values"> { imageInfo.user } </div>
                                        </div>
                                        <div className="row my-1">
                                            <div className="info"> Downloads : </div>
                                            <div className="values"> { imageInfo.downloads } </div>
                                        </div>
                                        <div className="row my-1">
                                            <div className="info"> Tags : </div>
                                            <div className="values"> {' '+imageInfo.tags} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12"></div>
                            <div className="col-12"></div>
                            <div className="col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}