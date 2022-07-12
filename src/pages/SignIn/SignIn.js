import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import book from '../../assets/book.png'
import { useDispatch } from 'react-redux'
import { create_new_user } from '../../Redux/Actions'
import './SignIn.css'

const SignIn = () => {

  const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const Navigate = useNavigate()

    const API_KEY = 'AIzaSyAwN3IIOeleFsF04R8Q67ih0wlo9wYbUAo'
    
    const SubMitForm = (e) => {
        e.preventDefault()
        
        if ( !email || password.length === 0) { 
            alert('Please fill in the form correctly')
            return  
      } 
      
      const user = {
        email
      }
        
        setIsLoading(true)
    // Submitting the user input to firebase 
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      
      setIsLoading(false)
      if (res.ok){
          console.log('Login Successful')
        Navigate('/lecturer')
        dispatch(create_new_user(user))
        return res.json()
      }
      // Show Auth Message if failed
      else{
        return res.json().then(data => {
          console.log(data)
          let errorMessage = 'Authentication Failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
            }
            alert(errorMessage)
          throw new Error(errorMessage);
        });
      }
    })
    }

  return (
      <div className='SignInContainer'>
      <img className='bookImage' src={book} alt='book' />
      <button onClick={() => Navigate('/')} className='backBtn'>Go Back Home</button>
          <div className='formHolder'>
            <form className='formContainer' onSubmit={SubMitForm}>
                <label htmlFor='email'>Email</label>
                <input className='formInputs' name='email' id='email' type='email' onChange={e => setEmail(e.target.value)} value={email} />
                <label htmlFor='password'>Password</label>
                <input className='formInputs' name='password' id='password' type='password' onChange={e => setPassword(e.target.value)} value={password} />
                <button className='logInBtn'>{!isLoading ? 'Log In': 'Loading...'}</button>
                <p>Don't have an Account? <Link className='link' to = '/signup'>Create Account</Link></p>
            </form>
          </div>
      </div>
  )
}

export default SignIn