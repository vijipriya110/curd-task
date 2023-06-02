import React, { createContext, useContext, useEffect, useState } from 'react'
// import data from '../data/data';

const StudentCtx = createContext(null)

export function AppProvider({children}) {
    
    const [students, setStudents] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await
        fetch("https://646202d9185dd9877e48af11.mockapi.io/users", {
          method: "GET",
        });

      const data = await response.json();
      if (data) {
        setStudents(data)
        console.log(data)
      }
    }
    getUsers();
  }, [])

  return (
    <StudentCtx.Provider
    value={{
        students, setStudents
    }}
    >
        {children}
    </StudentCtx.Provider>
  )
}
export const AppStates = ()=>{
    return useContext(StudentCtx)
}
export  default AppProvider 