import React from 'react'
import AddCourse from '../../components/add-course/Add_course'
import Materials from '../../components/Materials/Materials'
import { useDispatch, useSelector } from 'react-redux'
import {toggle_modal} from '../../Redux/Actions'
import './Welcome.css'

const Welcome = () => {

  const dispatch = useDispatch()
  const show_modal = useSelector(state => state.materials.toggle_modal)

  
  

  return (
    <div>
      {!show_modal && <button className='addCourse' onClick={() => dispatch(toggle_modal())}>Add Course Material</button>}
      {!show_modal && <Materials />}
      {show_modal && <AddCourse />}
    </div>
  )
}

export default Welcome