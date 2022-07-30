import React from 'react'
import Menu from '@mui/material/Menu'
import { Page } from 'types/types'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'

type Props = {
    onClose: (event: React.MouseEvent<HTMLElement>) => void;
    anchorElNav: null | HTMLElement;
    pages: Page[];
}

function HamburgerMenu({onClose, anchorElNav, pages}: Props) {
  return (
    <Menu id="menu-appbar" 
    anchorEl={ anchorElNav } 
    keepMounted 
    open={ Boolean(anchorElNav) } 
    onClose={ onClose }
    sx={{
        borderRadius: 2,
    }}
    >
      { pages.map( (page) => (
      <MenuItem component={Link} href={page.link} key={page.title}>
        {page.title}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default HamburgerMenu