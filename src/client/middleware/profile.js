
import { push }                         from 'react-router-redux';
import { profileSuccess, profileError } from '../actions/profile';

export const profileMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.type === 'PROFILE:REQUEST') {
        fetch(`/v1/user/${action.username}`, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(res => {
                // All went well
                if (res.ok) return res.json();
                // Something bad happened
                res.json().then(err => {
                    dispatch(profileError(err));
                });
            })
            .then(user => {
                dispatch(profileSuccess(user));
            })
            .catch(err => {
                console.log('PROFILE Network Error');
                console.log(err);
            });
    }
    next(action);
};