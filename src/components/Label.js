import InputLabel from '@mui/material/InputLabel';

const Label = ({ children, name }) => (
    <InputLabel
        sx={{
            color: theme => theme.palette.primary.main,
            fontWeight: 900,
            fontSize: '0.9rem',
            position: 'relative !important'
        }}
    >
        {children}
    </InputLabel>
)

export default Label;
