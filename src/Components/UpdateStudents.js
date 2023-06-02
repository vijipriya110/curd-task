// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { AppStates } from '../Context/AppProvider'
import * as yup from 'yup';
import { useFormik } from "formik";

export const fieldValidationSchema = yup.object({
  name : yup.string().required("Please Type students Name"),
  batch : yup.string().required("Please Type Batch name").min(5,"Please type valid batch name"),
  gender : yup.string().required("Please Type the Gender"),
  qualification : yup.string().required("Please Type the Student Qualification")
});

function UpdateStudents() {
  const {students, setStudents} = AppStates()

  
    const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
      initialValues : {
      name : "",
      batch : "",
      gender : "",
      qualification : ""
   },
   
    validationSchema : fieldValidationSchema,
    onSubmit : (updateStudentData)=>{
      console.log("onSubmit", updateStudentData)
      UpdateStudent(updateStudentData);
  
    },
  
  });
  
  const { id} = useParams()
  const editStudent = students[id]
  // const [name, setName] = useState("")
  // const [batch, setBatch] = useState("")
  // const [gender, setGender] = useState("")
  // const [qualification, setQualification] = useState("")
  const history = useHistory()

  // useEffect(() => {
  //   setName(editStudent.name)
  //   setBatch(editStudent.batch)
  //   setGender(editStudent.gender)
  //   setQualification(editStudent.qualification)
  // }, [editStudent])

  const UpdateStudent = async (updatedObject) => {
    // const updatedObject = {
    //   name: name,
    //   batch: batch,
    //   gender: gender,
    //   qualification: qualification,
    // }

    const response = await fetch(`https://646202d9185dd9877e48af11.mockapi.io/users/${editStudent.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedObject),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    if (data) {
      console.log(updatedObject)
      students[id] = updatedObject
      setStudents([...students])
      history.push("/students")
    }
  }

  return (
    <Base
      title={"This is Updatestudentss"}
      description={"here we can update the students data"}
    >
      <div className="text-area-col">
      <form onSubmit={handleSubmit}>


        <TextField
         fullWidth sx={{ m: 1 }}
         label="Name"
         variant="filled"
         type="name"
         name="name"
         onBlur={handleBlur}
         value={values.name}
         onChange={handleChange}
       />
       <div style={{ color:"crimson" }}>{touched.name && errors.name? errors.name:""}</div>

        <TextField
          fullWidth sx={{ m: 1 }}
          label="Batch"
          variant="filled"
          type="batch"
          name="batch"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.batch}
        />
        <div style={{ color:"crimson"}}>{touched.batch && errors.batch? errors.batch:""}</div>


        <TextField
          fullWidth sx={{ m: 1 }}
          label="Gender"
          variant="filled"
          type="gender"
          name="gender"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.gender}
        />
         <div style={{ color:"crimson"}}>{touched.gender && errors.gender? errors.gender:""}</div>



        <TextField
           fullWidth sx={{ m: 1 }}
           label="Qualification"
           variant="filled"
           type="qualification"
           name="qualification"
           onChange={handleChange}
           value={values.qualification}
         />
         <div style={{ color:"crimson"}}>{touched.qualification && errors.qualification? errors.qualification :""}</div>
 
        <Button
          variant="contained"
          // onClick={UpdateStudent}
          type="onSubmit"
        >Update Student</Button>

        </form>
      </div>
    </Base>
  )
}

export default UpdateStudents