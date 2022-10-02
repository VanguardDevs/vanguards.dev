import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const Footer = () => (
    <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'start',
        padding: '2rem 0',
        borderBottom: '1px solid gray',
        flexDirection: 'column',
        fontWeight: '400',
        fontSize: '0.9rem',
        borderTop: '1px solid #878787',
        backgroundColor: '#1e1e1e'
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            width: '13rem',
            justifyContent: 'space-between'
        }}>
            <Link
                href="https://vanguarddevs.com"
                rel="external"
                target="_blank"
                sx={{
                    fontWeight: '500',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    color: '#fff'
                }}
            >
                © 2022 VANGUARDDEVS
            </Link>
        </Box>
    </Box>
);

export default Footer;