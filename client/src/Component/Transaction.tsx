import React from 'react';
import { makeStyles } from '@material-ui/core';

export interface TransactionProps {
    history: Object[];
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '12px'
    },
    item: {
        fontSize: '12px',
        padding: '2px',
        marginLeft: '12px'
    },
    title: {
        fontSize: '16px',
        margin: '12px 0'
    }
}));

const Transaction = ({
    history
}: TransactionProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>Transactions:</div>
            {history?.length ? (
                history.map((item: any) => (
                    <div className={classes.item} key={item.time}>
                        {`${item.timeStamp} - ${item.amount} - ${item.action}`}
                    </div>
                ))
            ) : (
                <div className={classes.item}>No Transaction yet</div>
            )}
        </div>
    );
};

export default Transaction;