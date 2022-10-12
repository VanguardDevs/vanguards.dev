import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import TechStackIcon from '../../components/TechStackIcon';
// Icons
import LaravelIcon from '../../assets/icons/LaravelIcon'
import NodeIcon from '../../assets/icons/NodeIcon'
import ReactIcon from '../../assets/icons/ReactIcon'
import MongodbIcon from '../../assets/icons/MongodbIcon'
import PhpIcon from '../../assets/icons/PhpIcon'
import PythonIcon from '../../assets/icons/PythonIcon'
import PostgresIcon from '../../assets/icons/PostgresIcon'
import GithubActionsIcon from '../../assets/icons/GithubActionsIcon'
import CpanelIcon from '../../assets/icons/CpanelIcon'
import DigitalOceanIcon from '../../assets/icons/DigitalOceanIcon'
import PWAIcon from '../../assets/icons/PWAIcon';

const arrayIcons = [
    <LaravelIcon />,
    <NodeIcon />,
    <ReactIcon />,
    <MongodbIcon />,
    <PhpIcon />,
    <PythonIcon />,
    <PostgresIcon />,
    <GithubActionsIcon />,
    <CpanelIcon />,
    <DigitalOceanIcon />,
    <PWAIcon />
]

const Intro = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '2rem',
            backgroundColor: theme => theme.palette.text
        }}>
            <Box sx={{
                color: theme => theme.palette.black,
                fontSize: matches ? '2rem' : '1.5rem',
                fontWeight: '900',
                marginTop: '1.5rem'
            }}>
                CON EL STACK TECNOLÓGICO MÁS AVANZADO
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
                {arrayIcons.map(icon => <TechStackIcon icon={icon} />)}
            </Box>
        </Box>
    );
}

export default Intro;
