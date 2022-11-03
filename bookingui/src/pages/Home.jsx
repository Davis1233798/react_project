import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
    <Navbar />
    <Header />
    <Features/>
    </div>
  )
}

export default Home