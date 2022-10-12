import * as React from 'react'
import Box from '@mui/material/Box'

const TechStackIcon = ({ icon, isLarge, title }) => (
    <Box sx={{
        color: theme => theme.palette.orange,
        margin: '1.5rem',
        height: 'fit-content',
        width: 'fit-content'
    }} ariaLabel={title} title={title}>
        {React.cloneElement(icon, {
            color: 'inherit',
            sx: {
                color: 'inherit',
                width: isLarge ? '7rem' : '4rem',
                height: isLarge ? '7rem' : '4rem',
            }
        })}
    </Box>
)

export default TechStackIcon
