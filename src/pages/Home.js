import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import Video from '../components/Video';
import TypeWriterEffect from 'react-typewriter-effect';

const phrases = [
    'Construimos productos digitales a la vanguardia.',
    'Diseñamos soluciones a su medida.',
    'Desarrollamos websites y aplicaciones extraordinarias.',
    '#BeVanguard 🚀'
];

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
                <TypeWriterEffect
                    textStyle={{
                        fontSize: (matches) ? '3em' : '2.5em',
                        padding: '1rem 0',
                        width: (matches) ? '50%' : '100%',
                        marginTop: '2rem',
                        display: 'flex',
                        fontWeight: 900,
                        color: '#fc4b08'
                    }}
                    cursorColor="#fc4b08"
                    multiText={phrases}
                    multiTextDelay={2000}
                    typeSpeed={50}
                    multiTextLoop={true}
                />
            </Box>
        </Box>
    );
}

export default Home;
