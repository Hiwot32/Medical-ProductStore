import React from 'react'
import Header from '../../Components/Header/Header'
import home from './home.module.css'
import bg from '../../assets/Images/Home/imgi_36_pattern_med_03_med_08.png'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Category from '../../Components/Category/Category'

function Home() {
  return (
    <div className={home.container}>
        <Header />
        <Hero />
        <Category />
        <Footer />
      
    </div>
  )
}

export default Home
