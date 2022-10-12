import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Socials from './Socials';

const Footer = () => (
    <Box sx={{
        display: 'flex',
        width: '100%',
        height: 'fit-content',
        justifyContent: 'space-between',
        padding: '2rem 0',
        borderBottom: '1px solid gray',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: '400',
        fontSize: '0.9rem',
        borderTop: '1px solid',
        borderTopColor: theme => theme.palette.light,
        backgroundColor: '#1e1e1e',
        '&>*': {
            marginBottom: '1rem'
        }
    }}>
        <Socials />
        <Box>
            <Link
                href="https://vanguarddevs.com"
                sx={{
                    fontWeight: '500',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    transition: '0.3s',
                    color: theme => theme.palette.text,
                    '&:hover': {
                        color: theme => theme.palette.orange
                    }
                }}
            >
                © 2022 •  VANGUARDDEVS
            </Link>
        </Box>
        <Box sx={{
            color: theme => theme.palette.text,
            fontWeight: '500',
            textDecoration: 'none',
            fontSize: '1.05rem',
            transition: '0.3s',
        }}>
            Made with 🧡 in Carupano, VE
        </Box>
    </Box>
);

export default Footer;
