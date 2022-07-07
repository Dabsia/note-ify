import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import book from '../../assets/book.png'
import '../SignIn/SignIn.css'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
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
                  <label htmlFor='Conpassword'>Confirm Password</label>
                <input className='formInputs' name='Conpassword' id='Conpassword' type='Conpassword' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button className='logInBtn'>Log In</button>
                <p>Already have an Account? <Link className='link' to = '/signin'>Log In</Link></p>
            </form>
          </div>
      </div>
  )
}

export default SignUp