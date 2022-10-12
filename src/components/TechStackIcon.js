import * as React from 'react'
import Box from '@mui/material/Box'

const TechStackIcon = ({ icon, isLarge }) => (
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
                width: isLarge ? '8rem' : '4rem',
                height: isLarge ? '8rem' : '4rem',
            }
        })}
    </Box>
)

export default TechStackIcon
