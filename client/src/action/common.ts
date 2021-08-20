/* eslint-disable no-unused-vars */

export const SET_AMOUNT = 'SET_AMOUNT';

const EXEPENSE = 'exepense';

export const initiate = () => {
    return async (dispatch: any) => {
        try {
            const initialData = JSON.parse(localStorage.getItem(EXEPENSE) || '');
            const totalAmount = initialData.reduce((accumulator: number, { amount, action }: any) => {
                if (action === 'Add') {
                    return accumulator += amount
                } else {
                    return accumulator -= amount;
                }
            }, 0);
            dispatch({
                type: SET_AMOUNT, data: {
                    totalAmount,
                    history: initialData
                }
            });
        } catch (e) {
            console.error(e);
        }
    };
}

export const onAddOrRemove = (amount: number, action: string) => {
    return async (dispatch: any, getState: any) => {
        try {
            const { history, totalAmount } = getState().common;
            const timeStamp = new Date().toISOString();
            const newEntry = [...history];
            newEntry.push({
                timeStamp,
                amount,
                action
            });
            localStorage.setItem(EXEPENSE, JSON.stringify(newEntry));
            dispatch({
                type: SET_AMOUNT, data: {
                    totalAmount: totalAmount + (action === 'Add' ? (+amount) : (-amount)),
                    history: newEntry
                }
            });
        } catch (err) {
            console.error(err);
        }
    }
}