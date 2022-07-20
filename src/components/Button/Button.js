import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'

const Button = ({text}) => {

  const Navigate = useNavigate()

  const Redirect = () => {
    Navigate('/')
  }

  return (
    <button className='button' onClick={Redirect}>
        {text}
    </button>
  )
}

export default Button