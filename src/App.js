import {Switch,  Route } from 'react-router-dom';
import './App.css';
// import Base from './Base/Base';
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import data from './Data/data';
import { useState } from 'react';
import { useEffect } from 'react';
import Nopage from './Components/Nopage';
import Dashboard from './Components/Dashboard';
import { Redirect } from 'react-router-dom';
import Login from './Components/Login';
console.log(Login)
function App() {
    const [students, setStudents] = useState(data);

    useEffect(()=>{
      const getUsers = async () =>{
        const response = await
        fetch("https://646202d9185dd9877e48af11.mockapi.io/users", {
          method:"GET",
        });

        const data = await response.json();
        if(data){
          setStudents(data)
        }
      }
      getUsers();
    },[])
    return (
        <div className="App">
         
            <Switch>

                <Route exact path="/">
                  <Dashboard/>
                </Route>

                <Route path="/Students">
                <Students  
                  students = {students}
                  setStudents = {setStudents}
                  />
                </Route>
                <Route path="/details">
                  <Redirect to ="/Students/"/>
                </Route>

                <Route path="/add">
                   <AddStudents
                   students = {students}
                   setStudents = {setStudents}
                   />
                </Route>

                <Route path="/edit/:id/"> 
                  <UpdateStudents
                  students = {students}
                  setStudents = {setStudents}
                  />
                </Route>

                <Route path="**">
                   <Nopage/>
                </Route>

                
                

            </Switch>
           
        </div>
    );
}
export default App; 