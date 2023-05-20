import Base from '../Base/Base'

 import { useHistory } from 'react-router-dom'


 function Students({students, setStudents}) {
   const history = useHistory()


      const deleteStudents = async(studId) => {
         const response = await fetch(`https://646202d9185dd9877e48af11.mockapi.io/users/${studId}`,{
            method:"DELETE",
         });
         const data = await response.json()
         if(data){

      const remainingStudents = students.filter((stud, idx) => stud.id !== studId)
      setStudents(remainingStudents)
       }
    }
    return (
        <Base 
          title={"Student Description"}
          description={"The page containes students data"}
          
          > 
             
            <div className='card-container'>
               
               {students.map((stud,idx)=>(

                <div className='card' key={idx}> 

                 <div className='content'>
                 <h3>{stud.name}</h3>
                 <p>{stud.batch}</p>
                 <p>{stud.gender}</p>
                 <p>{stud.qualification}</p>
                 </div>

                 <div className='control'> 
                 <button onClick={()=>history.push(`/edit/${stud.id}`)}>edit</button> {" "}
                 <button onClick={()=>deleteStudents(stud.id)}>delete</button>
                 </div>

                </div>
               ))}
               

            </div>


         </Base>  
      )
   }


export default Students