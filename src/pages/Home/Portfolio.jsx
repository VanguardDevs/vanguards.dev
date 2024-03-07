import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
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
            // height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: matches ? 'row' : 'column',
            border: 'none'
        }} id='portfolio' />
    );
}

export default Intro;
