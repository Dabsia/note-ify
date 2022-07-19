import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import book from '../../assets/book.png'
import { create_new_user } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'
import '../SignIn/SignIn.css'

const SignUp = () => {
  const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
  
  const [isLoading, setIsLoading] = useState(false)
  
  const Navigate = useNavigate()

  const API_KEY = 'AIzaSyAwN3IIOeleFsF04R8Q67ih0wlo9wYbUAo'
    
    const SubMitForm = (e) => {
        e.preventDefault()
        if (!name || !email || password.length === 0) { 
            alert('Please fill in the form correctly')
            return  
      } 
      const user = {
        email, name, password
      }
      
      setIsLoading(true)
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
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
        // Sending the user datails to firebase

        fetch('https://note-ify-99caa-default-rtdb.firebaseio.com/users.json', {
          method : 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json()).then(data => console.log(data))


        dispatch(create_new_user(user))
        Navigate('/signin')
      }
      else{
        return res.json().then(data => {
          let errorMessage = 'Authentication Failed'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
          }
          alert(errorMessage)
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
             <label htmlFor='name'>Name</label>
                <input className='formInputs' name='name' id='name' type='name' onChange={e => setName(e.target.value)} value={name} />
                <label htmlFor='email'>Email</label>
                <input className='formInputs' name='email' id='email' type='email' onChange={e => setEmail(e.target.value)} value={email} />
                <label htmlFor='password'>Password</label>
                  <input className='formInputs' name='password' id='password' type='password' onChange={e => setPassword(e.target.value)} value={password} />
                <button className='logInBtn'>{ !isLoading ? 'Create Account' : 'Loading...'}</button>
                <p>Already have an Account? <Link className='link' to = '/signin'>Log In</Link></p>
            </form>
          </div>
      </div>
  )
}

export default SignUp