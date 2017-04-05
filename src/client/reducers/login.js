/**
 * Created by ghemingway on 4/4/17.
 */

export const loginReducer = function(state = {}, action) {
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
