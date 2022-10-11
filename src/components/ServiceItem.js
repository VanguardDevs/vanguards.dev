import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';

const ServiceItem = ({ title, description }) => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            marginTop: '1rem',
            color: theme => theme.palette.text,
            textAlign: 'left',
            width: '20rem'
        }}>
            <Box sx={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
            }}>
                {title}
            </Box>
            <Box sx={{
                fontSize: matches ? '1.1rem' : '1rem'
            }}>
                {description}
            </Box>
        </Box>
    );
}

export default ServiceItem;
