import React from 'react'
import Welcome from '../Welcome/Welcome'
import './Home.css'
import logo from '../../assets/logo.png'

const Home = () => {
  return (
      <div className='HomeContainer'>
          <nav className='nav'>
              <img className='logo' src={logo} alt='logo' />
              <button className='logoutBtn'>Logout</button>
          </nav>
          <Welcome />
      </div>
  )
}

export default Home