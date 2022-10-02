import Box from '@mui/material/Box'
import Logo from '../images/logo.png'
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            display: 'flex',
            flex: 1,
            flexDirection: matches ? 'row' : 'column'
        }}>
            <Box sx={{
                display: 'flex',
                height: 'fit-content',
                marginLeft: '30px',
                marginTop: '45px',
                flexDirection: 'column',
                zIndex: 1000,
                flexGrow: 2
            }}>
                <Box sx={{
                    fontSize: '1.5rem',
                    padding: '1rem 0',
                    textTransform: 'uppercase',
                    borderBottom: '5px solid rgb(26, 26, 197)',
                    width: '18rem',
                    display: 'flex',
                    fontWeight: 300,
                    paddingBottom: '2rem'
                }}>
                    Próximamente
                </Box>
                <Box sx={{
                    fontSize: '3em',
                    padding: '1rem 0',
                    width: '15rem',
                    marginTop: '2rem',
                    display: 'flex',
                    fontWeight: 500,
                    fontFamily: 'Roboto Slab',
                    color: 'rgb(26, 26, 197)'
                }}>
                    El <br />Macarapanero
                </Box>
            </Box>
            <Box sx={{
                zIndex: 1,
                alignSelf: 'center',
                marginRight: '2rem',
                flexGrow: '1'
            }}>
                <img src={Logo} width={!matches && '300px'} alt="Logo" />
            </Box>
        </Box>
    );
}

export default Home;