
import { push }                         from 'react-router-redux';
import { loginSuccess, loginError }     from '../actions/actions';

export const loginMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.type === 'LOGIN:REQUEST') {
        fetch('/v1/session', {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: action.username,
                password: action.password
            })
        })
            .then(res => {
                // All went well
                if (res.ok) return res.json();
                // Something bad happened
                res.json().then(err => {
                    dispatch(loginError(err));
                });
            })
            .then(user => {
                dispatch(loginSuccess(user));
                dispatch(push(`/profile/${user.username}`));
            })
            .catch(err => {
                console.log('LOGIN Network Error');
                console.log(err);
            });
    }
    next(action);
};