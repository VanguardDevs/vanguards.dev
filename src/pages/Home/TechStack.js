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
import MUIIcon from '../../assets/icons/MUIIcon';
import SocketIoIcon from '../../assets/icons/SocketIoIcon';
import DockerIcon from '../../assets/icons/DockerIcon';

const arrayIcons = [
    {
        icon: <LaravelIcon />,
        title: 'Laravel'
    },
    {
        icon: <NodeIcon />,
        title: 'Node'
    },
    {
        icon: <NodeIcon />,
        title: 'Node.js'
    },
    {
        icon: <ReactIcon />,
        title: 'React.js'
    },
    {
        icon: <MongodbIcon />,
        title: 'MongoDB'
    },
    {
        icon: <PhpIcon />,
        title: 'PHP'
    },
    {
        icon: <PythonIcon />,
        title: 'Python'
    },
    {
        icon: <PostgresIcon />,
        title: 'PostgresSQL',
    },
    {
        title: 'Github Actions',
        icon: <GithubActionsIcon />
    },
    {
        title: 'CPANEL',
        icon: <CpanelIcon />
    },
    {
        title: 'Digital Ocean',
        icon: <DigitalOceanIcon />
    },
    {
        title: 'Progressive Web Applications',
        icon: <PWAIcon />
    },
    {
        title: 'MUI (Material UI)',
        icon: <MUIIcon />
    },
    {
        title: 'Socket.IO',
        icon: <SocketIoIcon />
    },
    {
        title: 'Docker',
        icon: <DockerIcon />
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
                {arrayIcons.map(item =>
                    <TechStackIcon
                        icon={item.icon}
                        title={item.title}
                        isLarge={matches}
                    />
                )}
            </Box>
        </Box>
    );
}

export default TechStack;
