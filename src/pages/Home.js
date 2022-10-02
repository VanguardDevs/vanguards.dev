import Box from '@mui/material/Box'
import Logo from '../images/logo.png'
import Background from '../images/background.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            display: 'flex',
            flex: 1,
            flexDirection: matches ? 'row' : 'column',
            color: '#fff',
            height: '50%',
            backgroundSize: 'cover',
            zIndex: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`
        }}>
            <Box sx={{
                display: 'flex',
                height: 'fit-content',
                marginLeft: '30px',
                marginTop: '100px',
                flexDirection: 'column',
                zIndex: 1000,
                flexGrow: 2
            }}>
                <Box sx={{
                    fontSize: (matches) ? '1.5rem' : '1em',
                    padding: '1rem 0',
                    textTransform: 'uppercase',
                    borderBottom: '5px solid #fc4b08',
                    width: '18rem',
                    display: 'flex',
                    fontWeight: 300,
                    paddingBottom: '2rem'
                }}>
                    Próximamente
                </Box>
                <Box sx={{
                    fontSize: (matches) ? '3em' : '2.5em',
                    padding: '1rem 0',
                    width: (matches) ? '25rem' : '20rem',
                    marginTop: '2rem',
                    display: 'flex',
                    fontWeight: 900,
                    color: '#fc4b08'
                }}>
                    VanguardDevs 🚀
                </Box>
            </Box>
            <Box sx={{
                zIndex: 1,
                alignSelf: 'center',
                marginRight: (matches) ? '2rem' : '0',
                flexGrow: '1'
            }}>
                <img src={Logo} width={!matches ? '200px' : '300px'} alt="Logo" />
            </Box>
        </Box>
    );
}

export default Home;