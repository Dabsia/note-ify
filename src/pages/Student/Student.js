import React, {useState} from 'react'
import Materials from '../../components/Materials/Materials'
import './Student.css'
import { filter_courses } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

const Student = () => {

  const [selectedValue, setSelecetedValue] = useState(null)

  const dispatch = useDispatch()

  return (
    <div>
      <h3>Download Your Reading Material</h3>
      <p>{ selectedValue}</p>
      <p>Filter through by levels</p>
      <select className='select' value = {selectedValue} onChange = { e => dispatch(filter_courses(e.target.value))  }>
        <option></option>
        <option name = 'level'>100</option>
        <option name = 'level'>200</option>
        <option name = 'level'>300</option>
        <option name = 'level'>400</option>
        <option name = 'level'>500</option>
      </select>

      {/*
          const filteredMaterials = materials.materials.filter(material => material.name.lowerCase().includes(selectedValue)})
    */}
      
    

      <Materials student={ true} />
    </div>
  )
}

export default Student