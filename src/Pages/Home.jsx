import React from 'react'
// import HomePage from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>     
      <Products/>
    </div>
  )
}

export default Home
