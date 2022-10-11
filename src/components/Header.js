import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TelegramIcon from '../icons/TelegramIcon';
import FacebookIcon from '../icons/FacebookIcon';

const SocialIconStyles = {
    color: '#fff',
    transition: '0.3s',
    '&:hover': {
        color: '#fc4b08'
    }
}

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

const Header = () => (
    <BoxContainer>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: '300',
            fontSize: '1rem',
            color: '#fff',
            textTransform: 'uppercase',
            marginRight: '1rem'
        }}>
            <LocationOnIcon/><Box margin='0 0.25rem' />Carupano,  VE
        </Box>
        <Box sx={{
            padding: '0 1rem',
            '&>*': {
                marginRight: '1rem'
            }
        }}>
            <a href="https://www.facebook.com/VanguardDevs" title="Facebook" target="_blank" rel='noreferrer'>
                <FacebookIcon sx={SocialIconStyles} />
            </a>
            <a href="https://www.linkedin.com/company/vanguarddevs" title="LinkedIn" target="_blank" rel='noreferrer'>
                <LinkedinIcon sx={SocialIconStyles} />
            </a>
            <a href="https://www.instagram.com/vanguarddevs/" title="Instagram" target="_blank" rel='noreferrer'>
                <InstagramIcon sx={SocialIconStyles} />
            </a>
            <a href="https://t.me/VanguardDevs" target="_blank" rel='noreferrer' title="Telegram">
                <TelegramIcon sx={SocialIconStyles} />
            </a>
        </Box>
    </BoxContainer>
);

export default Header;
