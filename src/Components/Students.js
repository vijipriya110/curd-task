import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppStates } from '../Context/AppProvider';




// import { useState } from 'react';
// import data from '../data/data';
// import AddStudents from './AddStudents';
// import UpdateStudents from './UpdateStudents';



function Students() {
   const {students, setStudents} = AppStates()
   
   const history = useHistory()
   const deleteStudents = async (studId) => {
      const response = await fetch(`https://646202d9185dd9877e48af11.mockapi.io/users/${studId}`, {
         method: "DELETE",
      });
      const data = await response.json()
      if (data) {

         const remainingStudents = students.filter((stud, idx) => stud.id !== studId)
         setStudents(remainingStudents)
      }
   }
   return (
      <Base
         title={"Student Description"}
         description={"The page containes students data"}>
         <div className='card-container'>
            {students.map((stud, idx) => (

               <Card sx={{ maxWidth: 200, height: 220 }} key={idx}>
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        {stud.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {stud.batch}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {stud.gender}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {stud.qualification}
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button
                        size="small"
                        onClick={() => history.push(`/edit/${stud.id}`)}>
                        <ModeEditOutlineIcon />
                     </Button>

                     <Button
                        size="small"
                        onClick={() => deleteStudents(stud.id)}>
                        <DeleteIcon />
                     </Button>
                  </CardActions>
               </Card>
            ))}
         </div>

      </Base>
   )
}


export default Students