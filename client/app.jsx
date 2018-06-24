/* ============================ */
/* REACT DEPENDENCIES
/* ============================ */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

/* ============================ */
/* REDUX DEPENDENCIES
/* ============================ */
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promise from "redux-promise";
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from './reducer.jsx';

/* ============================ */
/* COMPONENTS
/* ============================ */
import Main from './Main/index.jsx';
import ImagePage from './Templates/imagePage.jsx';

/* ============================ */
/* CSS
/* ============================ */
import 'bootstrap';
import './main.scss';

//Debug
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()

//Build our store
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
const root = document.getElementById('app');

// Build function to render our app
const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router >
                <div>
                    <Switch>
                        <Route path="/:id" component={ImagePage}/>
                        <Route path="/" component={Main}/>
                    </Switch>

                </div>
            </Router>
        </Provider>
        , root
    );
};
renderApp();
