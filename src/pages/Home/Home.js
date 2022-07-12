import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const Navigate = useNavigate()

  return (
    <div>
      <h2>Welcome</h2>
      <h3>What category are you?</h3>
      <button onClick={() => Navigate('/student')}>Student</button>
      <button onClick={() => Navigate('/lecturer')}>Lecturer</button>
    </div>
  )
}

export default Home