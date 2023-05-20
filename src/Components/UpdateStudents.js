import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'


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
        <div>
            <input 
            type="text"
            placeholder="Enter the name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
            <input
            type="text"
            placeholder="Enter the batch"
            onChange={(e)=>setBatch(e.target.value)}
            value={batch}
            />
            <input
            type="text"
            placeholder="Enter the gender"
            onChange={(e)=>setGender(e.target.value)}
            value={gender}
            />
            <input 
            type="text"
            placeholder="Enter the qulification"
            onChange={(e)=>setQualification(e.target.value)}
            value={qualification}
            />

            <button onClick={(UpdateStudent)}>UpdateStudents</button>

        </div>
        </Base>
    )
}

export default UpdateStudents