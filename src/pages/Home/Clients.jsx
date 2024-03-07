import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import TechStackIcon from '../../components/TechStackIcon';
// Icons
import LaravelIcon from '../../assets/icons/LaravelIcon'
import NodeIcon from '../../assets/icons/NodeIcon'
import ReactIcon from '../../assets/icons/ReactIcon'
import SumatLogo from '../../assets/images/sumat.png'
import MacarapaneroLogo from '../../assets/images/macarapanero.png'

const arrayIcons = [
    {
        icon: SumatLogo,
        title: 'SUMAT',
        to: '/',
        height: '120px',
        width: '300px'
    },
    {
        icon: MacarapaneroLogo,
        title: 'Macarapanero',
        to: 'https://elmacarapanero.com.ve',
        height: '120px',
        width: '120px'
    }
]

const TechStack = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '2rem',
            backgroundColor: theme => theme.palette.secondary.main
        }}>
            <Box sx={{
                color: theme => theme.palette.black,
                fontSize: matches ? '2rem' : '1.5rem',
                fontWeight: '900',
                marginTop: '1.5rem'
            }}>
                NUESTROS CLIENTES <em>CONFÍAN</em> EN NOSOTROS
            </Box>
            <Box sx={{
                display: 'flex',
                marginTop: '1rem',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%'
            }}>
                {arrayIcons.map((item, i) => (
                    <Box sx={{
                        padding: '1rem 2rem'
                    }}>
                        <a href={item.to} target='_blank' title={item.title}>
                            <img src={item.icon} height={item.height} width={item.width} />
                        </a>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default TechStack;
