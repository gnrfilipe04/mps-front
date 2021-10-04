import Snackbar from '@material-ui/core/Snackbar';
import { Color } from '@material-ui/lab';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useState } from 'react';
import { useSnackBar } from '../../contexts/SnackBarContext';

interface SnackBarCustom {
    message?: string;
    color?: Color;
}

export const SnackBarCustom = ({message, color}: SnackBarCustom) => {
    const { open, changeOpenSnackbar } = useSnackBar()

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={8} variant="filled" {...props} />;
    }
    
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }

    changeOpenSnackbar(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={color}>
                {message}
            </Alert>
        </Snackbar>
    )
}