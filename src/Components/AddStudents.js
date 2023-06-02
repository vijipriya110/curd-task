
import Base from '../Base/Base'
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import { AppStates } from '../Context/AppProvider';


export const fieldValidationSchema = yup.object({
  name : yup.string().required("Please Type students Name"),
  batch : yup.string().required("Please Type Batch name").min(5,"Please type valid batch name"),
  gender : yup.string().required("Please Type the Gender"),
  qualification : yup.string().required("Please Type the Student Qualification")
});

function AddStudents() {
  const {students, setStudents} = AppStates();
  const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
    initialValues : {
    name : "",
    batch : "",
    gender : "",
    qualification : ""
 },
 
  validationSchema : fieldValidationSchema,
  onSubmit : (newStudentData)=>{
    console.log("onSubmit", newStudentData)
    createStudents(newStudentData);

  },

});

  const history = useHistory()
  // const [name, setName] = useState("")
  // const [batch, setBatch] = useState("")
  // const [gender, setGender] = useState("")
  // const [qualification, setQualification] = useState("")
  // const [open, setOpen] = useState(false);
     
  const createStudents = async (newStudents) => {
    // const newStudents = {
    //   name,
    //   batch,
    //   gender,
    //   qualification
    // }

    const response = await fetch("https://646202d9185dd9877e48af11.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(newStudents),
      headers: {
        "Content-Type": "application/json"
      },
    })
    const data = await response.json()
    setStudents([...students, data])
    history.push("/Students")

  }

  return (
    <Base
      title={"Add New Students"}
      description={"New Students data add here"}
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
          type="onSubmit"
        >Add Students</Button>

        
       </form>
      </div>
    </Base>
  )
}

export default AddStudents