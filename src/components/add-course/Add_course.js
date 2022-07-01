import React, { useState } from 'react'
import { storage } from '../../firebase/config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import './Add_course.css'
import { useDispatch} from 'react-redux'
import { toggle_modal } from '../../Redux/Actions'
import { add_Course } from '../../Redux/Actions'

const AddCourse = () => {

  const dispatch = useDispatch()

  const [progress, setProgress] = useState(0)
  const [materialName, setMaterialName] = useState('')
  const [file, setFile] = useState(null)
  

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const submitForm = (e) => {
    e.preventDefault()
    uploadFiles(file)
  }

  const uploadFiles = (file) => {
    if (!file || !materialName) {
      alert("Please choose a file first!")
      return 
    }
   

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file)

    let maxNumber = 45;
    let randomNumber = Math.floor((Math.random() * maxNumber) + 1);

      uploadTask.on('state_changed', (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      if (prog === 100) {
        alert('Successfully Uploaded the material')
      }
      setProgress(prog)
    }, (err) => console.log(err),
    
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => dispatch(add_Course({
            url,
            materialName, 
            id: randomNumber
          })))
      }
    )
  }



  return (
      <div className='Add_course'>
        <form className='addCourseForm' onSubmit={submitForm}>
        <input className='Add_Course_input' name='file' type='file' onChange={handleChange} />
        <input className='Add_Course_input' placeholder='Enter Material Name' name='coursename' type='text' onChange={(e) => setMaterialName(e.target.value)} value = {materialName} />
        <button className='Add_Course_Button' >Upload Course Material</button>
        <p>Uploaded: { progress}%</p>
      </form>
      <button className='closeModal' onClick={() => dispatch(toggle_modal())}>X</button>  
      
      </div>
  )
}

export default AddCourse