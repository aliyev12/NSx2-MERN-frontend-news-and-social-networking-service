import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';

export const loadMessages = messages => {
    return ({
    type: LOAD_MESSAGES,
    messages
});
}

export const remove = id => {
    return ({
    type: REMOVE_MESSAGE,
    id
});}

export const removeMessage = (user_id, message_id) => {
    return dispatch => {
        return apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
        .then(() => {
            return dispatch(remove(message_id));
        })
        .catch(err => dispatch(addError(err.message)));
    }
}


export const fetchMessages = () => {
    return dispatch => {
        return apiCall('GET', '/api/messages')
            .then((res) => {
                dispatch(loadMessages(res))
            })
            .catch(err => dispatch(addError(err.messages)));
    }
}

// postNewMessage takes a text of the message as an argument, then it returns a thunk with dispatch and getState arguments
// and the thunk returns a call to apiCall imported method, passing along the method POST, the URI with all needed params and the text of the message
export const postNewMessage = text => (dispatch, getState) => apiCall('post', `/api/users/${getUserId(getState)}/messages`, {text})
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));

function getUserId(stateFromThunk) {
    let {currentUser} = stateFromThunk();
    return currentUser.user.id;
}