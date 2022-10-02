import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const Footer = () => (
    <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'start',
        padding: '1rem 0',
        borderBottom: '1px solid gray',
        flexDirection: 'column',
        fontWeight: '400',
        fontFamily: 'Roboto',
        fontSize: '0.9rem'
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            width: '13rem',
            justifyContent: 'space-between'
        }}>
            © 2022{'   '}
            <Link
                href="https://vanguarddevs.com"
                rel="external"
                target="_blank"
                sx={{
                    transition: '0.3s',
                    padding: '0.25rem 0.5rem',
                    fontWeight: '500',
                    fontFamily: 'Roboto Slab, sans-serif',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    backgroundColor: 'rgb(26, 26, 197)',
                    color: '#fff'
                }}
            >
                VanguardDevs
            </Link>
        </Box>
    </Box>
);

export default Footer;