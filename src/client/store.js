/**
 * Created by ghemingway on 4/4/17.
 */

import { createStore, combineReducers, applyMiddleware }    from 'redux';
import { routerReducer }                                    from 'react-router-redux';

import { profileReducer }               from './reducers/profile';
import { profileMiddleware }            from './middleware/profile';

import { loginMiddleware }              from './middleware/login';
import { loginReducer }                 from './reducers/login';


export default function configureStore(initialState, routerWare) {
    const store = createStore(
        combineReducers({
            login: loginReducer,
            profile: profileReducer,
            router: routerReducer
        }),
        initialState,
        applyMiddleware(loginMiddleware, profileMiddleware, routerWare)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/profile', () => {
            const nextRootReducer = require('./reducers/profile');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}