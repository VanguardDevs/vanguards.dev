import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const Input = styled(TextField)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-root': {
        color: '#fff',
        backgroundColor: alpha(theme.palette.secondary.light, 0.1),
        '&:hover': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.75)} 0 0 0 0.1rem`
        },
    },
    '& .MuiInputBase-input': {
        borderRadius: '0.375rem',
        position: 'relative',
        fontSize: '1rem',
        width: '100%',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ], {
            duration: '0.1s',
            delay: '0.1s',
            easin: '0.1s'
        })
    },
}));

export default Input
