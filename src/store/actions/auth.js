import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
    // This will be dispatched and sent to redux reducer
    return {
        type: SET_CURRENT_USER,
        user: user
    }
}

export function authUser(type, userData) {
    // So, I still need to wait for api call to finish until I can dispatch this action
    return dispatch => {
        // Since I don't use any lifecycle method, I need another promise here to make sure that wait for api call has finished before I dispatch anything
        return new Promise((resolve, reject) => {
            // Using axios api.js library, go ahead and send a request to signup a user
            return apiCall('post', `/api/auth/${type}`, userData)
            // Destructure token into a separate variable and the rest of the arguments will be insite user object
            .then(({token, ...user}) => {
                // Store the token received back from axios request into browser localStorage under jwtToken
                localStorage.setItem('jwtToken', token);
                // Create current user in the redux store
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            })
            .catch(err => {
                dispatch(addError(err.message));
                reject(); // indicate the API call failed
            });
        });
    }
}