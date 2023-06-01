import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'


function UpdateStudents({students, setStudents}) {
    const {id} = useParams()
    const editStudent = students[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory()

    useEffect (()=>{
        setName(editStudent.name)
        setBatch(editStudent.batch)
        setGender(editStudent.gender)
        setQualification(editStudent.qualification)
    }, [editStudent])

    const UpdateStudent = async() => {
    const updatedObject = {
        name:name,
        batch:batch,
        gender:gender,
        qualification:qualification,
    }

    const response = await fetch(`https://646202d9185dd9877e48af11.mockapi.io/users/${editStudent.id}`,{
        method:"PUT",
        body:JSON.stringify(updatedObject),
        headers:{
            "Content-Type" : "application/json"
        }
    })
    const data = await response.json()
    if(data){
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

        <TextField
          id="filled-basic"
          fullWidth sx={{m:1}}
          label="Name"
          variant="filled"
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <TextField
          id="filled-basic"
          fullWidth sx={{m:1}}
          label="Batch"
          variant="filled"
          type="text"
          onChange={(e)=>setBatch(e.target.value)}
          value={batch}
        />

        <TextField
          id="filled-basic"
          fullWidth sx={{m:1}}
          label="Gender"
          variant="filled"
          type="text"
          onChange={(e)=>setGender(e.target.value)}
          value={gender}
        />


        <TextField
          id="filled-basic"
          fullWidth sx={{m:1}}
          label="Qualification"
          variant="filled"
          type="text"
          onChange={(e)=>setQualification(e.target.value)}
          value={qualification}
        />
            <Button 
            variant="contained"
            onClick={UpdateStudent}
            >Update Student</Button>    
            
        </div>
        </Base>
    )
}

export default UpdateStudents