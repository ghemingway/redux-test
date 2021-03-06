
import { push }                         from 'react-router-redux';
import { loginSuccess, loginError }     from '../actions/login';

export const loginMiddleware = ({ getState, dispatch }) => next => action => {
    //console.log('Foo');
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
                const path = action.return ? action.return : `/profile/${user.username}`;
                // Save user info into localStorage
                localStorage.setItem('login', JSON.stringify({ user: user }));
                // Dispatch and move on
                dispatch(loginSuccess(user));
                dispatch(push(path));
            })
            .catch(err => {
                console.log('LOGIN Network Error');
                console.log(err);
            });
    }
    next(action);
};

if (module.hot) {
    module.hot.accept('./login');
}