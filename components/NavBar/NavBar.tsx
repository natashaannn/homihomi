import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Page } from 'types/types'
import HamburgerMenu from './HamburgerMenu'
import PageLinks from './PageLinks'
import SearchBar from './SearchBar'

type Props = {
    appName: string;
    pages: Page[];
}

function NavBar({ appName, pages }: Props) {
    // hamburger menu functions
    const [anchorElNav, setanchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenHamburgerMenu = (event: React.MouseEvent<HTMLElement>) => {
        setanchorElNav(event.currentTarget)
    }

    const handleCloseHamburgerMenu = (event: React.MouseEvent<HTMLElement>) => {
        setanchorElNav(null)
    }

    // searchbar functions
    const [searchQuery, setSearchQuery] = useState<string>('')

    const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    const handleClickSearch = () => {
        console.log(searchQuery)
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
            <Toolbar>
            <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={ handleOpenHamburgerMenu }
            sx={{
                display: {
                    xs: 'flex',
                    md: 'none',
                    lg: 'none'
                }
            }}>
                <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                { appName }
            </Typography>
            <SearchBar 
                searchQuery={searchQuery} 
                handleChange={handleSearchQueryChange} 
                onClick={handleClickSearch} />
            <PageLinks pages={ pages } />
            </Toolbar>

            <HamburgerMenu 
            anchorElNav={anchorElNav} 
            onClose={ handleCloseHamburgerMenu }
            pages={ pages } />
        </AppBar>
    </Box>
 
  )
}

export default NavBar