/**
 * Created by ghemingway on 4/4/17.
 */

import { createStore, combineReducers, applyMiddleware }    from 'redux';
import { routerReducer }                                    from 'react-router-redux';

import {profileReducer }                from './reducers/profile';
import { profileMiddleware }            from './middleware/profile';

import { loginReducer }                 from './reducers/login';
import { loginMiddleware }              from './middleware/login';


export const configureStore = (initialState, routerMiddleware) => {
    const store = createStore(
        combineReducers({
            login: loginReducer,
            profile: profileReducer,
            router: routerReducer
        }),
        initialState,
        applyMiddleware(loginMiddleware, profileMiddleware, routerMiddleware)
    );

    // Hot Module Replacement API
    if (module.hot && process.env.NODE_ENV !== "production") {
        module.hot.accept(['./store', './reducers/login', './reducers/profile'], () => {
            console.log('Still working on how to HMR the reducers');
            const reducer = combineReducers({
                login: require('./reducers/login').loginReducer,
                profile: require('./reducers/profile').profileReducer,
                router: routerReducer
            });
            store.replaceReducer(reducer);
        });
    }
    return store;
};
