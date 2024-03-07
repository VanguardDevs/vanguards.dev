import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import ServiceItem from '../../components/ServiceItem';
// Icons
import CubeIcon from '../../assets/images/Cube.png'
import PaintSprayIcon from '../../assets/images/PaintSpray.png'
import CodingIcon from '../../assets/images/Coding.png'
import LayersIcon from '../../assets/images/Layers.png'

const servicesArr = [
    {
        title: 'Diseño Gráfico',
        icon: PaintSprayIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Desarrollo web',
        icon: CodingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Soluciones a la medida',
        icon: CubeIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Mantenimiento & Soporte',
        icon: LayersIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const Intro = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} id='services'>
            <Box sx={{
                width: matches ? '80%' : '100%',
                height: matches ? '80vh' : '90',
                margin: '0 2rem'
            }}>
                <Box sx={{
                    color: theme => theme.palette.primary.main,
                    fontSize: matches ? '3rem' : '2rem',
                    fontWeight: '900'
                }}>
                    Servicios
                </Box>
                <Box sx={{
                    width: '100%',
                    marginTop: matches ? '5vh' : '2.5vh',
                    display: 'flex',
                    height: '100%',
                    alignItems: matches ? 'center' : 'unset',
                    flexDirection: matches ? 'row' : 'column',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}>
                    {servicesArr.map(service => (
                        <ServiceItem
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Intro;
