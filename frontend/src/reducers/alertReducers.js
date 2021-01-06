import { SET_ALERT, REMOVE_ALERT } from '../constants/constants';

export const alertReducer=(state = { alert : { alerts: []}}, action)=> {
    const { type, payload } = action;

    switch(type) {
        case SET_ALERT:
        return {...state, payload}
        case REMOVE_ALERT:
            return {}
        default:
            return state;
    }
}
