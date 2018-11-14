import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';

import App from './components/app';
import rootReducer from './reducers/index';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from "./actions/authorActions";

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {connectRouter, ConnectedRouter, routerMiddleware} from 'connected-react-router';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            reduxImmutableStateInvariant(), 
            thunk,
            routerMiddleware(history)
        )
    )
);
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);