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
        title: 'Node.js'
    },
    {
        icon: <ReactIcon />,
        title: 'React.js'
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
                {arrayIcons.map((item, i) =>
                    <TechStackIcon
                        icon={item.icon}
                        title={item.title}
                        isLarge={matches}
                        key={i}
                    />
                )}
            </Box>
        </Box>
    );
}

export default TechStack;
