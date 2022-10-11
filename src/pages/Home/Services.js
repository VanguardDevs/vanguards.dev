import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import ServiceItem from '../../components/ServiceItem';

const servicesArr = [
    {
        title: 'Diseño Gráfico',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. At imperdiet dui accumsan sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec ac.'
    },
    {
        title: 'Desarrollo web',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. At imperdiet dui accumsan sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec ac.'
    },
    {
        title: 'Soluciones a la medida',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. At imperdiet dui accumsan sit amet. Massa vitae tortor condimentum lacinia quis vel eros donec ac.'
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
        }}>
            <Box sx={{
                width: matches ? '80%' : '100%',
                height: matches ? '80vh' : '90',
                margin: '0 2rem'
            }}>
                <Box sx={{
                    color: theme => theme.palette.orange,
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
                    justifyContent: 'space-between'
                }}>
                    {servicesArr.map(service => (
                        <ServiceItem
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Intro;
