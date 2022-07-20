import React from 'react'
import './Materials.css'
import {useSelector} from 'react-redux'
import CourseMaterial from '../courseMaterial/CourseMaterial'

const Materials = ({student, selectedValue}) => {
  const materialURLs = useSelector(state => state.materials.books)
  const filteredBooks = useSelector(state => state.materials.filteredBooks)



  return (
    <div className='materialsList'>
      {student && ((selectedValue.length >= 1 && filteredBooks.length > 0) ? <div className='filter'>Filtered Result:</div> : (selectedValue.length >= 1 && filteredBooks <= 0) && <div className='filter'>No result matching filter.</div>)}
        {student ?
              filteredBooks.length === 0 ? (
                      materialURLs.map((materialURL, idx) => {
                          return <CourseMaterial id = {idx}  key={idx} student = {student} lecturerEmail = {materialURL.lecturerEmail} url={materialURL.url} name={ materialURL.materialName} deleteCourse = {false} level={ materialURL.materialLevel} code={ materialURL.materialCode} />      
                } )          
              ) : (
                      filteredBooks.map((materialURL, idx) => {
                          return <CourseMaterial id = {idx} key={idx} student = {student} lecturerEmail = {materialURL.lecturerEmail} url={materialURL.url} name={ materialURL.materialName} level={ materialURL.materialLevel} code={ materialURL.materialCode} />      
                } )          
              )
        :  materialURLs.length === 0 ? (
                  <p>No Material Found</p>
              ) : (
                      materialURLs.map((materialURL, idx) => {
                          return <CourseMaterial idx = {materialURL.idx} lecturerEmail = {materialURL.lecturerEmail} key={idx} student = {student} url={materialURL.url} name={ materialURL.materialName} deleteCourse = {true} level={ materialURL.materialLevel} code={ materialURL.materialCode} />      
                } )          
              )}
      </div>
  )
}

export default Materials