import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import Video from '../components/Video';

const Home = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            height: '100vh',
            transition: 'all 0.3s ease-out 0s',
            position: 'relative'
        }}>
            <Video />
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
                    fontWeight: 400,
                    paddingBottom: '2rem',
                    color: '#000'
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
        </Box>
    );
}

export default Home;
