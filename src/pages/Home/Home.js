import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {

  const Navigate = useNavigate()

  return (
    <div className='Home'>
      <div className='CenterDiv'>
        <div className='InnerDiv'>
        
          <h2>Welcome</h2>
          <h3>What category are you?</h3>
          <div className='btnContainers'>
            <button className='buttons' onClick={() => Navigate('/student')}>Student</button>
            <button className='buttons' onClick={() => Navigate('/lecturer')}>Lecturer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home