import * as React from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

const TechStackIcon = ({ icon, isLarge, title }) => (
    <Tooltip title={title} sx={{ backgroundColor: theme => theme.palette.primary.main }} key={title}>
        <Box sx={{
            color: theme => theme.palette.primary.main,
            margin: isLarge ? '1.5rem' : '1rem',
            height: 'fit-content',
            width: 'fit-content'
        }}>
                {React.cloneElement(icon, {
                    color: 'inherit',
                    sx: {
                        color: 'inherit',
                        width: isLarge ? '6rem' : '3rem',
                        height: isLarge ? '6rem' : '3rem',
                    }
                })}
        </Box>
    </Tooltip>
)

export default TechStackIcon
