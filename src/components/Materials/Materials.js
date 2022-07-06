import React from 'react'
import './Materials.css'
import {useSelector} from 'react-redux'
import CourseMaterial from '../courseMaterial/CourseMaterial'

const Materials = ({student}) => {

    const materialURLs = useSelector(state => state.materials.materials)
  return (
    <div className='materialsList'>
        {
              materialURLs.length === 0 ? (
                  <p>No Material Found</p>
              ) : (
                      materialURLs.map((materialURL, idx) => {
                          return <CourseMaterial id = {idx} key={idx} student = {student} url={materialURL.url} name={ materialURL.materialName} level={ materialURL.materialLevel} code={ materialURL.materialCode} />      
                } )          
              )
        }
      </div>
  )
}

export default Materials