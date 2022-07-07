import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Welcome from './pages/Welcome/Welcome';
import Student from './pages/Student/Student';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';


// <Route path='/signup' element={<SignUp />} />
        // <Route path='/signin' element={<SignIn />} />

const App = () => {
  return (
    <div className="App">
      
      <Routes>
        <Route path = '/' element = {<Welcome />} />
        <Route path='/student' element={<Student />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path = '/signup' element = {<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;
