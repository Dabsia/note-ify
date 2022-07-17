import React from 'react';
import { useDispatch } from 'react-redux';
import './CourseMaterial.css'
import { delete_course } from '../../Redux/Actions';

const CourseMaterial = ({ url, student, name, code, level, deleteCourse, idx }) => {

  const dispatch = useDispatch()

  return (
    <div className='materialContainer'>
      {deleteCourse && <i onClick={() => {
        dispatch(delete_course(idx))
      }} className="ri-close-fill delBtn"></i>}
      <p>{name}</p>
      <p>{ code}</p>
      <p>{ level}</p>
      {student && <a target='_blank' className='downloadBtn' href={url} rel="noreferrer noopener">Download <i className="ri-download-2-line"></i></a>}
    </div>
  )
}

export default CourseMaterial