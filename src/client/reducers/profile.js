/**
 * Created by ghemingway on 4/4/17.
 */

export const profileReducer = (state = {}, action) => {
    switch(action.type) {
        case 'PROFILE:REQUEST':
            return Object.assign({}, state, {
                username: action.username
            });
        case 'PROFILE:SUCCESS':
            return Object.assign({}, state,
                action.user
            );
        case 'PROFILE:ERROR':
            return Object.assign({}, state, {
                username: action.error
            });
        default:
            return state;
    }
};
