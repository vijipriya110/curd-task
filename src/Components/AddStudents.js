import React, { useState } from "react";
import Base from '../Base/Base'
import { useHistory } from "react-router-dom";
import { Button, IconButton, Snackbar, TextField } from "@mui/material";

function AddStudents({students, setStudents}) {
    const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
      history.push("/Students")
    };

    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          close
        </IconButton>
      </React.Fragment>
    );
  

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
    handleClick()
    
    } 

    return (
        <Base
        title={"Add New Students"}
        description={"New Students data add here"}
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
            onClick={createStudents}
            >Add Students</Button> 
            
            <Snackbar
             open={open}
             autoHideDuration={6000}
             onClose={handleClose}
             message="Added Sucessfully"
             action={action}
             />   
            
        </div>
        </Base>
    )
}

export default AddStudents