import React from 'react';
import './CourseMaterial.css'

const CourseMaterial = ({ url, student, name, code, level }) => {


  return (
    <div className='materialContainer'>

      
      
      <p>{name}</p>
      <p>{ code}</p>
      <p>{ level}</p>
      {student && <a target='_blank' className='downloadBtn' href={url} rel="noreferrer noopener">Download <i className="ri-download-2-line"></i></a>}
    </div>
  )
}

export default CourseMaterial