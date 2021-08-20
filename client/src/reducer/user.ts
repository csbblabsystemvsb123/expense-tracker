//import produce from 'immer';
import { AUTHENTICATE_USER, USER_INFO, CLEAR_USER_INFO } from '../action/user';
import { Payload } from './common';

export const intialState = {
    isAuthenticated: false,
    info: {}
};

let state = {
    ...intialState
};

const reducer = (_prevState: any, { type, data }: Payload) => {
    switch (type) {
        case AUTHENTICATE_USER:
            state.isAuthenticated = data;
            return state;
        case USER_INFO:
            state.info = data.info;
            return state;
        case CLEAR_USER_INFO:
            state = { ...intialState }
            return state;
        default:
            return state;
    }
}

export default reducer;