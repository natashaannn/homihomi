import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { Page } from 'types/types'

type Props = {
    pages: Page[];
}

function PageLinks({ pages }: Props) {
  return (
    <Box             
    sx={{
        display: {
            xs: 'none',
            md: 'flex',
            lg: 'flex'
        },
        flexGrow: 1,
        justifyContent: 'flex-end'
    }}>
    { pages.map( (page) => (
        <Button 
        variant="text" 
        color="primary" 
        key={page.title} 
        href={page.link}
        >
        {page.title}
        </Button>
    ))}
    </Box>
  )
}

export default PageLinks