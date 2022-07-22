import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import { useState } from 'react'

import HamburgerMenu from './HamburgerMenu'
import Button from '@mui/material/Button'

import { Page } from '@global/types'
import SearchBar from './SearchBar'

type Props = {
    pages: Page[];
}

function NavBar({ pages }: Props) {
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
        <AppBar position="fixed" color="transparent">
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
                HomiHomi
            </Typography>
            <SearchBar 
                searchQuery={searchQuery} 
                handleChange={handleSearchQueryChange} 
                onClick={handleClickSearch} />
            <Box             
            sx={{
                display: {
                    xs: 'none',
                    md: 'flex',
                    lg: 'flex'
                }
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