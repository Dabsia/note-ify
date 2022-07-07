import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import book from '../../assets/book.png'
import './SignIn.css'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const SubMitForm = (e) => {
        e.preventDefault()
        console.log({email, password})
    }

  return (
      <div className='SignInContainer'>
          <img className='bookImage' src={book} alt='book' />
          <div className='formHolder'>
            <form className='formContainer' onSubmit={SubMitForm}>
                <label htmlFor='email'>Email</label>
                <input className='formInputs' name='email' id='email' type='email' onChange={e => setEmail(e.target.value)} value={email} />
                <label htmlFor='password'>Password</label>
                <input className='formInputs' name='password' id='password' type='password' onChange={e => setPassword(e.target.value)} value={password} />
                <button className='logInBtn'>Log In</button>
                <p>Don't have an Account? <Link className='link' to = '/signup'>Create Account</Link></p>
            </form>
          </div>
      </div>
  )
}

export default SignIn