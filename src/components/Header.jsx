import * as React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll'
import TransparentLogo from '../assets/images/transparent.png'

const BoxContainer = styled(Box)(({ theme, isScroll }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: isScroll ? 'space-between' : 'end',
    padding: '0 1rem',
    position: 'fixed',
    alignItems: 'center',
    zIndex: 1000,
    backgroundColor: isScroll ? `${theme.palette.secondary.dark}` : 'transparent',
    [theme.breakpoints.down('md')]: {
        padding: '1.5rem 0',
        justifyContent: 'center'
    }
}))

const AnchorTag = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    padding: '1rem',
    fontWeight: '600',
    color: `${theme.palette.secondary.main}`,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
        color: `${theme.palette.primary.main}`,
    }
}))

const internalLinks = [
    {
        title: 'Servicios',
        link: 'services',
    },
    {
        title: 'Portfolio',
        link: 'portfolio'
    },
    {
        title: 'Contacto',
        link: 'contact'
    }
]

const Header = () => {
    const [color, setColor] = React.useState(false)

    const changeColor = () => {
        if (window.scrollY >= window.innerHeight) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <BoxContainer component='navbar' isScroll={color}>
            {color && <img src={TransparentLogo} height='50px' width='50px' />}
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
                        <AnchorTag
                            aria-label={link.title}
                            to={link.link}
                            spy={true}
                            duration={500}
                            smooth={true}
                        >
                            {link.title}
                        </AnchorTag>
                    </li>
                ))}
            </Box>
        </BoxContainer>
    );
}

export default Header;
