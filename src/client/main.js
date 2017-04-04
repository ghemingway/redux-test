// Our mutation (Reducer) function,
// create a _new_ state based on the action passed
import { createStore } from 'redux';
import { reducer } from './reducer';


const initialState = {
    counter: 3
};

const store = createStore(reducer, initialState);

// Update view (this might be React in a real app)
function updateView() {
    document.querySelector('#counter').innerText = store.getState().counter;
}

store.subscribe(updateView);
// Update view for the first time
updateView();

// Listen to click events
document.getElementById('inc').onclick = () => store.dispatch({ type: 'INC' });
document.getElementById('dec').onclick = () => store.dispatch({ type: 'DEC' });
window.store = store;
