import React, {useState} from 'react'
import { storage } from '../../firebase/config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import './Add_course.css'
import { useDispatch, useSelector} from 'react-redux'
import { toggle_modal } from '../../Redux/Actions'
import { add_Course } from '../../Redux/Actions'

const AddCourse = () => {

  const dispatch = useDispatch()
  const materialURL = useSelector(state => state.materials.books)
  console.log(materialURL)

  const [progress, setProgress] = useState(0)
  const [materialName, setMaterialName] = useState('')
  const [materialCode, setMaterialCode] = useState('')
  const [materialLevel, setMaterialLevel] = useState('')
  const [file, setFile] = useState(null)
  

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const submitForm = (e) => {
    e.preventDefault()
    uploadFiles(file)

      fetch('https://note-ify-99caa-default-rtdb.firebaseio.com/materials.json', {
          method : 'POST',
          body: JSON.stringify({materialURL}),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json()).then(data => console.log(data))
    
  }

  const uploadFiles = (file) => {
    if (!file || !materialName || !materialCode || !materialLevel ) {
      alert("Please Enter all details first!")
      return 
    }
   

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file)


      uploadTask.on('state_changed', (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      if (prog === 100) {
        alert('Successfully Uploaded the material')
      }
      setProgress(prog)
    }, (err) => console.log(err),
    
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url, id) => dispatch(add_Course({
            url,
            materialName, 
            materialCode,
            materialLevel,
            id
          })))
      }
    )
  }





  return (
      <div className='Add_course'>
        <form className='addCourseForm' onSubmit={submitForm}>
        <input className='Add_Course_input' name='file' type='file' onChange={handleChange} />
        <input className='Add_Course_input' placeholder='Enter Material Name' name='coursename' type='text' onChange={(e) => setMaterialName(e.target.value)} value={materialName} />
        <input className='Add_Course_input' placeholder='Enter Course Code' name='coursecode' type='text' onChange={(e) => setMaterialCode(e.target.value)} value={materialCode} />
        <input className='Add_Course_input' placeholder='Enter Level' name='level' type='text' onChange={(e) => setMaterialLevel(e.target.value)} value = {materialLevel} />
        <button className='Add_Course_Button' >Upload Course Material</button>
        <p>Uploaded: { progress}%</p>
      </form>
      <button className='closeModal' onClick={() => dispatch(toggle_modal())}>X</button>  
      
      </div>
  )
}

export default AddCourse