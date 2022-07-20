import React from 'react';
import logo from '../../assets/logo.png'

import { logout } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        Navigate('/signin')
    }

  return (
    <nav className='nav'>
              <img className='logo' onClick = {() => Navigate('/')} src={logo} alt='logo' />
              <button onClick={logoutHandler} className='logoutBtn'>Logout</button>
    </nav>
  )
}

export default Navigation