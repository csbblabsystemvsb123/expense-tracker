import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

export interface ExpenseProps {
    balance: number;
    onAdd: Function;
    onRemove: Function;
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    balance: {
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center'
    },
    textBox: {
        margin: '12px 0',
        backgroundColor: '#FFFFFF'
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '196px',
        margin: '12px 0'
    },
    error: {
        color: '#ff5151'
    }
}));

const Expense = ({
    balance,
    onAdd,
    onRemove
}: ExpenseProps) => {
    const classes = useStyles();
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const onAddClick = function () {
        if (error) {
            setError('You cannot add with invalid input');
        } else if (amount === 0) {
            setError('Please enter valid amount');
        } else {
            onAdd(amount);
            setAmount(0);
        }
    };

    const onRemoveClick = function () {
        if (error) {
            setError('You cannot remove with invalid input');
        } else if (balance < amount) {
            setError('The amount that entered is more than you have');
        } else if (amount === 0) {
            setError('Please enter valid amount');
        } else {
            onRemove(amount);
            setAmount(0);
        }
    };

    const handleFieldChange = function ({ target }: any) {
        const value = target?.value;
        if (!value || isNaN(value)) {
            setError('Pleae enter a valid amount');
        } else if (value < 0) {
            setError('Amount cannot be negative');
        } else {
            setError(null);
        }
        setAmount(target?.value ? Number(target?.value) : target?.value);
    };

    return (
        <div className={classes.root}>
            <div className={classes.balance}>Balance: {balance} </div>
            <div className={classes.textBox}>
                <TextField value={amount}
                    id='standard-number'
                    type='number'
                    onChange={handleFieldChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        pattern: '[0-9]*'
                    }}
                />
            </div>
            <div className={classes.error}
                style={{ visibility: error ? 'visible' : 'hidden' }}>
                {error}
            </div>
            <div className={classes.controls}>
                <div>
                    <Button variant='contained'
                        color='primary'
                        onClick={onAddClick}>
                        Add
                    </Button>
                </div>
                <div>
                    <Button variant='contained'
                        onClick={onRemoveClick}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Expense;