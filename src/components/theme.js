import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fc4b08',
        },
        secondary: {
            main: '#fff',
            light: '#878787',
            dark: '#1e1e1e'
        }
    },
    typography: {
        fontFamily: [
            'Source Sans Pro',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
