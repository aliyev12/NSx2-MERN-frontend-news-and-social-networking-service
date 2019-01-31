// Import the combineReducers consisting of currentUser and errors reducers
import rootReducer from './reducers/index';
import {createStore, applyMiddleware, compose} from 'redux';
// Thunk allows delay of the evaluation of some expressions needed for anynx code in redux
import thunk from 'redux-thunk';

export function configureStore() {
    // Create store with createStore function from redux package
    // First parameter is always some function or reducer in my case
    // Second param is to enhance the store - using middleware in my case
    const store = createStore(rootReducer, 
        // Here we are combining two different middlewares: one is the thunk for working with async code in redux... 
        //... and the second one is for being able to use Chrome "Redux" extention in the browser
        // The content of that one is just coppied and pasted from github - just search for redux chrome extention : https://github.com/zalmoxisus/redux-devtools-extension
        compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));

        // In this file I brought in root redurer, redux tools, middleware including thunk
        return store;
}