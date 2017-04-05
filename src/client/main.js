// Our mutation (Reducer) function,
// create a _new_ state based on the action passed
import React, { Component }             from 'react';
import { render }                       from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider }                     from 'react-redux';
import { Router, Route, Redirect }      from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory                    from 'history/createBrowserHistory';

import { loginReducer }                 from './reducers/login';
import { loginMiddleware }              from './middleware/login';

import { Landing }                      from './components/landing';
import { Login }                        from './components/login';
import { Profile }                      from './components/profile';

const history = createHistory();
const routerWare = routerMiddleware(history);
const store = createStore(
    combineReducers({
        login: loginReducer,
        router: routerReducer
    }),
    applyMiddleware(loginMiddleware, routerWare)
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Landing}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile/:user" render={(props) => {
                    const user = store.getState().login.user;
                    return typeof(user) === 'object' && !user.error ?
                        <Profile {...props}/> :
                        <Redirect to={{
                            pathname: '/login',
                            search: `?return=${props.match.url}`
                        }}/>;
                }}/>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('primary'));

// Put store into the global
window.store = store;
