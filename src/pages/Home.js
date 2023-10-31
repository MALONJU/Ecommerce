import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/iphone14.jpg'

function Home() {
  return (
    <div className='home'>
        <div
         className ='headerContainer' style={{backgroundImage:'url(${BannerImage})'} }>
        <h1> bibiche food</h1>
        <p> MANGER POUR GARDE LA FORME</p>
        <Link to='/menu'>
        <button>ORDER</button>
        </Link>
        </div>
    </div>
  )
}

export default Home
