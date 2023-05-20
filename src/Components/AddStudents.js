import React, { useState } from "react";
import Base from '../Base/Base'
import { useHistory } from "react-router-dom";

function AddStudents({students, setStudents}) {
    const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

    const createStudents = async() =>{
        const newStudents ={
            name,
            batch,
            gender,
            qualification
        }

    const response = await fetch("https://646202d9185dd9877e48af11.mockapi.io/users", {
        method : "POST",
        body:JSON.stringify(newStudents),
        headers:{
            "Content-Type" : "application/json"
        },
    })
    const data = await response.json()
    setStudents([...students, data])
    history.push("/Students")

    } 

    return (
        <Base
        title={"Add New Student"}
        description={"New Student details add here"}
        >
        <div className="add-new">
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

            <button onClick={createStudents}>Add Students</button>

        </div>
        </Base>
    )
}

export default AddStudents

