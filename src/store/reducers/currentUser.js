import { SET_CURRENT_USER } from '../actionTypes';

// Using this reducer so when a user is logged in to know who the user is, and that they've logged in
// When a user loggs out, isAuthenticated is set back to false and user is set to an empty object
const DEFAULT_STATE = {
    isAuthenticated: false, // hopefully be true when the user is logged in
    user: {} // all the user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                // turn empty object into false or if there are keys, true
                // Two exclamation marks stand for:
                // isAuthenticated is true if keys.length is not falsy
                isAuthenticated: !!Object.keys(action.user).length,
                // We take information about the user and place it into redux store
                user: action.user
            };
        default:
            return state;
    }
};
