/**
 * Created by ghemingway on 4/4/17.
 */

// See if there is state to restore from localStorage
let initial = localStorage.getItem('login');
initial = initial ? JSON.parse(initial) : {};

export const loginReducer = (state = initial, action) => {
    switch(action.type) {
        case 'LOGIN:REQUEST':
            return Object.assign({}, state, {
                user: action.username
            });
        case 'LOGIN:SUCCESS':
            return Object.assign({}, state, {
                user: action.user
            });
        case 'LOGIN:ERROR':
            return Object.assign({}, state, {
                user: action.error
            });
        default:
            return state;
    }
};
