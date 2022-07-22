import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '@components/NavBar/NavBar'
import { Page } from '@global/types'

const pages: Page[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
]

const Home: NextPage = () => {
  return (
    <NavBar pages={pages}></NavBar>
  )
}

export default Home
