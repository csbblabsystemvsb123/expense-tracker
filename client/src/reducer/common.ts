import {
    SET_AMOUNT
} from '../action/common';

export interface Payload {
    type: string;
    data: any;
}

export const intialState = {
    history: [],
    totalAmount: 0
}

const state = {
    ...intialState
}

const reducer = (_prevState: any, { type, data }: Payload) => {
    switch (type) {
        case SET_AMOUNT:
            state.history = data.history;
            state.totalAmount = data.totalAmount;
            return state;
        default:
            return state;
    }
}

export default reducer;