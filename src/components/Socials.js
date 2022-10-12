import Box from '@mui/material/Box'
import LinkedinIcon from '../assets/icons/LinkedinIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';
import TelegramIcon from '../assets/icons/TelegramIcon';
import FacebookIcon from '../assets/icons/FacebookIcon';

const SocialIconStyles = {
    color: '#fff',
    transition: '0.3s',
    '&:hover': {
        color: '#fc4b08'
    }
}

const Socials = () => (
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
);

export default Socials;
