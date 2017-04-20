/** Copyright 2017
 * @author      Graham Hemingway <graham.hemingway@gmail.com>
 */
import React                            from 'react';
import { render }                       from 'react-dom';
import { Provider }                     from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory                    from 'history/createBrowserHistory';
import { AppContainer }                 from 'react-hot-loader';

import App                              from './app';
import { configureStore }               from './store';

const history = createHistory();
const store = configureStore({}, routerMiddleware(history));


const setRender = () => {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppContainer>
                    <App />
                </AppContainer>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('primary')
    );
};
setRender();

// Hot Module Replacement API
if (module.hot && process.env.NODE_ENV !== "production") {
    module.hot.accept('./app', () => {
        setRender();
    });
    // Put store into the global
    window.store = store;
}
