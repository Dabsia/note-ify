import React from 'react'
// import {Routes, Route} from 'react-router-dom'
import './App.css';
import Welcome from './pages/Welcome/Welcome';



//<Route path='/signup' element={<SignUp />} />


/*
  <Routes>
        <Route path = '/' element = {<Welcome />} />
        
        <Route path='/signin' element={<SignIn />} />
      </Routes>

*/

const App = () => {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
