import React from 'react'
import './Materials.css'
import {useSelector} from 'react-redux'
import CourseMaterial from '../courseMaterial/CourseMaterial'

const Materials = () => {

    
    const materialURLs = useSelector(state => state.materials)
    

  return (
      <div>
        {
              materialURLs.length === 0 ? (
                  <p>No Notes Found</p>
              ) : (
                      materialURLs.map((materialURL) => {
                          return <CourseMaterial key={materialURL.id} url={materialURL.url} name={ materialURL.materialName} />      
                } )          
              )
        }
      </div>
  )
}

export default Materials