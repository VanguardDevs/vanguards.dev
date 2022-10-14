import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Socials from './Socials';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            height: matches ? '10vh' : '10rem',
            justifyContent: 'space-between',
            padding: '5vh 0',
            border: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: '400',
            fontSize: '0.9rem',
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
                        color: theme => theme.palette.secondary.main,
                        '&:hover': {
                            color: theme => theme.palette.primary.main
                        }
                    }}
                >
                    © 2022 •  VANGUARDDEVS
                </Link>
            </Box>
            <Box sx={{
                color: theme => theme.palette.secondary.main,
                fontWeight: '500',
                textDecoration: 'none',
                fontSize: '1.05rem',
                transition: '0.3s',
            }}>
                Made with 🧡 in Venezuela
            </Box>
        </Box>
    );
}

export default Footer;
