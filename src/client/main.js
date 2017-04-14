/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import React                            from 'react';
import { render }                       from 'react-dom';
import { Provider }                     from 'react-redux';
import { Route, Redirect }              from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory                    from 'history/createBrowserHistory';
import { AppContainer }                 from 'react-hot-loader';

import configureStore                   from './store';

import { Landing }                      from './components/landing';
import { Login }                        from './components/login';
import { Profile }                      from './components/profile';

const history = createHistory();
const routerWare = routerMiddleware(history);


// Hot Module Replacement API
if (module.hot) {
    const store = configureStore({}, routerWare);
    render(
        <AppContainer>
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
                                }}/>
                        }}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        </AppContainer>, document.getElementById('primary')
    );
    module.hot.accept();
    // Put store into the global
    window.store = store;
}
