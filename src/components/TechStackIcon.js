import * as React from 'react'
import Box from '@mui/material/Box'

const TechStackIcon = ({ icon }) => (
    <Box sx={{
        color: theme => theme.palette.orange,
        margin: '1.5rem',
        height: 'fit-content',
        width: 'fit-content'
    }}>
        {React.cloneElement(icon, {
            color: 'inherit',
            sx: {
                color: 'inherit',
                width: '8rem',
                height: '8rem'
            }
        })}
    </Box>
)

export default TechStackIcon
