import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
// Icons

const BoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'end',
    padding: '1rem 0',
    position: 'fixed',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        padding: '1.5rem 0',
        justifyContent: 'center'
    }
}))

const AnchorTag = styled('a')(() => ({
    textDecoration: 'none',
    padding: '1rem',
    fontWeight: '600',
    color: '#fff'
}))

const internalLinks = [
    {
        title: 'Servicios',
        link: '/#services',
    },
    {
        title: 'Portfolio',
        link: '/#portfolio'
    },
    {
        title: 'Contacto',
        link: '/#contact'
    }
]

const Header = () => (
    <BoxContainer component='navbar'>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: '300',
            fontSize: '1rem',
            color: '#fff',
            textTransform: 'uppercase',
            marginRight: '1rem',
            listStyle: 'none'
        }} component='ul'>
            {internalLinks.map(link => (
                <li>
                    <AnchorTag aria-label={link.title} href={link.link}>{link.title}</AnchorTag>
                </li>
            ))}
        </Box>
    </BoxContainer>
);

export default Header;
