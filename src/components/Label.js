import InputLabel from '@mui/material/InputLabel';

const Label = ({ children, name }) => (
    <InputLabel
        sx={{
            color: theme => theme.palette.secondary.main,
            fontWeight: 600,
            fontSize: '1rem',
            position: 'relative !important'
        }}
    >
        {children}
    </InputLabel>
)

export default Label;
