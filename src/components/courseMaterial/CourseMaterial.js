import React from 'react'

const CourseMaterial = ({ url, name }) => {
  return (
    <div>
    
      <p>{name}</p>
      <a target= '_blank' href={url} rel="noreferrer noopener">{name }</a>
    </div>
  )
}

export default CourseMaterial