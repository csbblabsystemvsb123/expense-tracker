import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { onAddOrRemove, initiate } from '../action/common';
import Expense from '../Component/Expense';
import Transaction from '../Component/Transaction';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        margin: '12px',
        boxShadow: '1px 1px 2px 1px black',
    },
    title: {
        fontSize: '24px'
    },
    expense: {
        margin: '12px 0',
        minWidth: '40vw',
        boxShadow: '1px 1px 2px 1px black',
        justifyContent: 'center'
    },
    transaction: {
        margin: '12px 0',
        minWidth: '40vw',
        height: '55vh',
        overflow: 'auto',
        boxShadow: '1px 1px 2px 1px black'
    }
}));

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useSelector(({ common: { history } }: any) => history);
    const totalAmount = useSelector(({ common: { totalAmount } }: any) => totalAmount);

    useEffect(() => {
        dispatch(initiate());
    }, []);

    const onAmountChange = (amount: number, action = 'Add') => {
        dispatch(onAddOrRemove(amount, action));
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>Expense Tracker - Basic</div>
            <div className={classes.expense}>
                <Expense
                    balance={totalAmount}
                    onAdd={function (amount: number) {
                        onAmountChange(amount)
                    }}
                    onRemove={function (amount: number) {
                        onAmountChange(amount, 'Remove')
                    }} />
            </div>
            <div className={classes.transaction}>
                <Transaction
                    history={history?.reverse() || []} />
            </div>
        </div>
    );
};

export default Home;