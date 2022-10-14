import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import Form from '../../components/Form';
import Map from '../../components/Map'

const Intro = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            height: matches ? '80vh' : '100vh',
            display: 'flex',
            justifyContent: matches,
            alignItems: 'space-between',
            flexDirection: matches ? 'row' : 'column',
            border: 'none'
        }} id='contact'>
            <Box sx={{
                flex: 1,
                paddingLeft: matches ? '4rem' : '2rem',
                height: '100%',
                paddingTop: '12vh',
                paddingBottom: '3vh'
            }}>
                <Box sx={{
                    color: theme => theme.palette.primary.main,
                    fontSize: matches ? '3rem' : '2rem',
                    fontWeight: '900'
                }}>
                    Contáctanos
                </Box>
                <Form />
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
