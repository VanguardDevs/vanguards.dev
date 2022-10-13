import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import Map from '../../components/Map'

const Intro = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: matches ? 'row' : 'column',
            border: 'none'
        }} id='contact'>
            <Box sx={{
                flex: 1,
                paddingLeft: '4rem',
                height: '100%',
                paddingTop: '8vh'
            }}>
                <Box sx={{
                    color: theme => theme.palette.orange,
                    fontSize: matches ? '3rem' : '2rem',
                    fontWeight: '900'
                }}>
                    Contáctanos
                </Box>
            </Box>
            <Box sx={{
                height: 'fit-content',
                flex: 1
            }}>
                <Map />
            </Box>
        </Box>
    );
}

export default Intro;
