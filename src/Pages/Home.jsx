import React, {useState} from 'react'
// import HomePage from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import Products from '../components/Products/Products'

function Home() {
  const [token, setToken] = useState(localStorage.getItem("userToken"))

  return (
    <div>
      <Header  token={token} setToken={setToken}/>
      <Navbar/>
      <Banner/>     
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home
