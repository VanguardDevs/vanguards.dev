import * as React from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';

const ServiceItem = ({ title, description, icon }) => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            marginTop: matches ? '0' : '1rem',
            color: theme => theme.palette.text,
            textAlign: 'left',
            width: matches ? '50%' : '100%',
            display: 'flex',
            flexDirection: matches ? 'column' : 'row-reverse',
            alignItems: 'center'
        }}>
            <Box sx={{
                backgroundColor: theme => theme.palette.orange,
                padding: '1rem',
                borderRadius: '6px',
                width: 'fit-content',
                height: 'fit-content',
                textAlign: 'center'
            }}>
                <img
                    src={icon}
                    height={matches ? '64px' : '48px'}
                    width={matches ? '64px' : '48px'}
                />
            </Box>
            <Box margin={matches ? '3rem 0' : '0 1rem 1rem 0'}>
                <Box sx={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        height: '4px',
                        left: '0',
                        width: '4rem',
                        bottom: '-8px',
                        zIndex: 1000,
                        borderRadius: '12px',
                        background: theme => theme.palette.orange
                    }
                }}>
                    {title}
                </Box>
                <Box sx={{
                    fontSize: '1.1rem'
                }}>
                    {description}
                </Box>
            </Box>
        </Box>
    );
}

export default ServiceItem;
