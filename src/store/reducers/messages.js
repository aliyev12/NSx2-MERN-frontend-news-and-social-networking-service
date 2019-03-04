import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';
import doesFileExist from '../../services/doesFileExist';

const message = (state = [], action) => {
    switch(action.type) {
        case LOAD_MESSAGES:
            const messages = action.messages.map(m => {
                if (!doesFileExist(m.user.profileImageUrl)) {
                    m.user.profileImageUrl = null;
                }
                return m;
            });
            return [...messages];
        case REMOVE_MESSAGE:
            return state.filter(message => message._id !== action.id);
        default:
            return state;
    }
}

export default message;