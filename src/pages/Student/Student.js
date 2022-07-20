import React, {useState} from 'react'
import Materials from '../../components/Materials/Materials'
import './Student.css'
import { filter_courses } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button/Button'

const Student = () => {

  const [selectedValue, setSelecetedValue] = useState('')

  const dispatch = useDispatch()

  return (
    <div>
      <Button text = 'Home' path = 'home'/>
      <h3>Download Your Reading Material</h3>
      <p>Filter through by levels</p>
      <p>The email of the lecturer is on the material. Incase you have any issues</p>
      <select className='select' value={selectedValue} onChange={e => {
        setSelecetedValue(e.target.value)
        dispatch(filter_courses(e.target.value))
      }}>
        <option></option>
        <option name = 'level'>100</option>
        <option name = 'level'>200</option>
        <option name = 'level'>300</option>
        <option name = 'level'>400</option>
        <option name = 'level'>500</option>
      </select>

      <Materials student={ true} selectedValue = {selectedValue} />
    </div>
  )
}

export default Student