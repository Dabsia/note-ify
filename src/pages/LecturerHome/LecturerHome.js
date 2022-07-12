import React from 'react'
import Welcome from '../Welcome/Welcome'
import './LecturerHome.css'
import Navigation from '../../components/Navigation/Navigation'

const LecturerHome = () => {
  return (
      <div className='LecturerHomeContainer'>
          <Navigation />
          <Welcome />
      </div>
  )
}

export default LecturerHome