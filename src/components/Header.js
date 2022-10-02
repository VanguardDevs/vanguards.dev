import Box from '@mui/material/Box'
import { alpha } from '@mui/material'
import { styled } from '@mui/material/styles';
// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TelegramIcon from '../icons/TelegramIcon';

const SocialIconStyles = {
    color: '#fc4b08',
    transition: '0.3s',
    '&:hover': {
        color: alpha('#fc4b08', 0.6)
    }
}

const BoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'end',
    padding: '1rem 0',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
    }
}))

const Header = () => (
    <BoxContainer>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: '300',
            fontSize: '0.9rem'
        }}>
            <LocationOnIcon/> Carúpano, Venezuela
        </Box>
        <Box sx={{
            padding: '0 1rem',
            '&>*': {
                marginRight: '1rem'
            }
        }}>
            <a href="https://www.linkedin.com/company/vanguarddevs" rel="external" target="_blank">
                <LinkedinIcon sx={SocialIconStyles} />
            </a>
            <a href="https://www.instagram.com/vanguarddevs/" rel="external" target="_blank">
                <InstagramIcon sx={SocialIconStyles} />
            </a>
            <a href="https://t.me/VanguardDevs" rel="external" target="_blank">
                <TelegramIcon sx={SocialIconStyles} />
            </a>
        </Box>
    </BoxContainer>
);

export default Header;