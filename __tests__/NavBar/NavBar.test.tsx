import NavBar from '@components/NavBar/NavBar'
import HamburgerMenu from '@components/NavBar/HamburgerMenu'

import IconButton from '@mui/material/IconButton'

import { render, screen, shallow } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('NavBar', () => {
    it('renders app name', () => {
      render(<NavBar />)
  
      const appName = screen.getByRole('heading', {
        name: /HomiHomi/i,
      })
  
      expect(appName).toBeInTheDocument()
    })

    it('opens menu on click', () => {
      render(<NavBar />)

      const burgerMenu = screen.getByRole('link', {
        expanded: false
      })

      expect(burgerMenu).toBeInTheDocument()
    })

    it('renders page links', () => {
      render(<NavBar />)
  
      const linkButton = screen.getByRole('button', {
        name: /Home/i,
      })
  
      expect(linkButton).toBeInTheDocument()
    })
  })
  

export {}