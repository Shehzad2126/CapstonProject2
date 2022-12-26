import React from 'react'
import banner from "../../images/banner.jpg"
import "./Banner.css"
function Banner() {
  return (
    <div className='banner_container my-5 container'>
        <img src={banner} alt="Banner" className='banner'/>
    </div>
  )
}

export default Banner
