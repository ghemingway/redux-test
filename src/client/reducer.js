/**
 * Created by ghemingway on 4/4/17.
 */

export default reducer = function(state, action) {
    switch(action.type) {
        case 'INC':
            return Object.assign({}, state, { counter: state.counter + 1 });
        case 'DEC':
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
}