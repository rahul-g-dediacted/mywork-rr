import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import { Footer } from '../components/footer'
import LandingPage from './landing-page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
<Navbar />
<LandingPage />
<Footer/>
    </>
  )
}
